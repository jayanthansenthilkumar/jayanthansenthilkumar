document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const aiAssistantBubble = document.getElementById('aiAssistantBubble');
    const aiAssistantChat = document.getElementById('aiAssistantChat');
    const closeChat = document.getElementById('closeChat');
    const sendMessage = document.getElementById('sendMessage');
    const userMessage = document.getElementById('userMessage');
    const chatMessages = document.getElementById('chatMessages');
    const aiAssistantContainer = document.querySelector('.ai-assistant-container');
    const emojiButton = document.querySelector('.chat-action-btn[title="Add emoji"]');
    const attachButton = document.querySelector('.chat-action-btn[title="Attach file"]');
    const settingsButton = document.getElementById('settingsButton');
    
    // Create the settings panel element
    createSettingsPanel();
    
    // Settings variables
    let settings = loadSettings() || {
        theme: 'light',
        accentColor: 'blue',
        soundEnabled: true,
        autoOpen: false,
        typingSpeed: 'medium',
        language: 'en'
    };
    
    // Apply saved settings on load
    applySettings();
    
    // Common emojis for quick access
    const commonEmojis = [
        '😊', '👍', '🙏', '❤️', '👋', '👏', '🔥', '✨', '🎉', '🤔', 
        '😂', '😍', '👀', '💡', '⭐', '🚀', '💯', '🙌', '👌', '🤝'
    ];
    
    // Pre-defined responses
    const responses = {
        greeting: [
            "Hello! I'm Jayanthan Senthilkumar's virtual assistant. How can I help you today?", 
            "Hi there! I'm Jayanthan's AI. What can I do for you?",
            "Welcome to my portfolio! I'm Jayanthan's digital twin. How may I assist you?",
            "Great to see you here! I'm Jayanthan's AI assistant. What would you like to know about me or my work?"
        ],
        about: [
            "I'm Jayanthan Senthilkumar, a full-stack developer specializing in creating robust web applications with a focus on AI/ML integration. I'm passionate about building solutions that make a difference.",
            "I'm a passionate developer with expertise in full-stack development, particularly interested in innovative technologies and AI solutions. My journey in tech began with a fascination for how software can transform businesses.",
            "As a full-stack developer, I blend technical skills with business understanding to create comprehensive digital solutions. I'm currently pursuing my Bachelor's in AIML at M.Kumarasamy College of Engineering.",
            "I'm Jayanthan, a developer who believes in the power of technology to solve real-world problems. With experience in both frontend and backend development, I create seamless user experiences backed by robust systems."
        ],
        skills: [
            "My technical skills include full-stack development (React, Node.js), Firebase, Python, React/Next.js, MongoDB/SQL, AWS/Cloud services, and Git version control. I'm also proficient in business analysis and team management.",
            "I specialize in full-stack development with expertise in various technologies including React, Python, Firebase, and cloud services. I also have strong soft skills like communication and leadership that help me work effectively in teams.",
            "On the technical side, I'm skilled in JavaScript ecosystems (React, Node.js), database technologies (SQL, MongoDB), and cloud platforms. My soft skills include problem-solving, team leadership, and effective communication.",
            "My skill set covers the entire development stack - from designing user interfaces with React to implementing backend logic with Node.js and managing databases. I'm also experienced in DevOps practices and cloud deployment."
        ],
        projects: [
            "Some of my notable projects include a Complaint Management System for my college, Action Analysis using AI for human motion tracking, and Haitatsu - a delivery management platform. You can check them out in the Resume section!",
            "I've worked on several projects including CMS (a complaint tracking system), Action Analysis with AI (computer vision for movement analysis), and delivery management solutions. Feel free to explore them in the Resume section of this website.",
            "My portfolio includes various projects that showcase my range of skills. The Complaint Management System demonstrates my ability to create practical solutions, while Action Analysis highlights my work with AI algorithms.",
            "I've built a variety of applications, from college utility systems to AI-integrated platforms. Each project presented unique challenges that helped me grow as a developer. You can find details in my portfolio section."
        ],
        contact: [
            "You can reach me via email at jayanthansenthilkumar18@gmail.com or by phone at +91 8825756388. I'm based in Karur, India and always open to interesting conversations and opportunities.",
            "Feel free to contact me through email (jayanthansenthilkumar18@gmail.com) or phone (+91 8825756388). You can also connect with me on LinkedIn, GitHub, or Twitter for professional networking!",
            "I'm always open to networking and collaboration. You can email me at jayanthansenthilkumar18@gmail.com, call me at +91 8825756388, or connect with me on social media platforms accessible from the homepage.",
            "Looking to get in touch? Send me an email at jayanthansenthilkumar18@gmail.com or call +91 8825756388. I typically respond within 24 hours and am always eager to discuss new opportunities."
        ],
        experience: [
            "I have over a year of experience in web development and project management. My work ranges from freelance projects to team-led initiatives at college. I've been a key contributor to the Technology Innovation Hub since April 2024.",
            "My professional journey includes freelancing since 2022, leading the AI Club at my college, and working as a developer at the Technology Innovation Hub. Each role has enhanced my technical skills and leadership abilities.",
            "I've gained experience through various roles - as a freelance developer, a student leader at the AI Club, and most recently at the Technology Innovation Hub. These experiences have helped me understand both the technical and collaborative aspects of software development."
        ],
        education: [
            "I'm pursuing a Bachelor's Degree in Artificial Intelligence and Machine Learning at M.Kumarasamy College of Engineering (2022-2026). I completed my higher secondary education at Cheran Matriculation Higher Secondary School with 89.5%.",
            "My academic background includes a B.Tech in AIML (ongoing) at MKCE, along with schooling at Cheran Matriculation Higher Secondary School where I focused on computer science and achieved 89.5%.",
            "I'm currently in my engineering program at M.Kumarasamy College of Engineering, specializing in Artificial Intelligence and Machine Learning. Before this, I studied computer science in high school, developing a strong foundation in logical thinking and problem-solving."
        ],
        startup: [
            "PrisolTech is my startup that focuses on freelancing, consultancy, and creation services. It's a platform where I bring together my technical skills and business acumen to deliver value to clients. Visit prisoltech.com to learn more!",
            "I founded PrisolTech to provide specialized development and consultancy services to businesses looking to digitally transform. We focus on creating custom solutions tailored to specific business needs.",
            "PrisolTech represents my entrepreneurial side. It's a venture that provides web development, business consultancy, and digital transformation services to clients across various sectors.",
            "Through my startup PrisolTech, I offer digital solutions that help businesses establish their online presence and streamline operations. Our services include web development, business analysis, and digital strategy consulting."
        ],
        default: [
            "That's an interesting question! Could you elaborate a bit more so I can provide a more specific answer?",
            "I'm not sure I fully understand. Could you provide more context or rephrase your question?",
            "Let me think about that for a moment. Could you share a bit more about what you're looking to know?",
            "I'd like to help with that. Could you be a bit more specific about what you're interested in learning?"
        ]
    };
    
    // Initialize position based on screen size
    function adjustAssistantPosition() {
        if (window.innerWidth <= 768) {
            // Mobile view - position to avoid navbar
            aiAssistantContainer.style.bottom = '80px';
        } else if (window.innerWidth <= 1024) {
            // Tablet view
            aiAssistantContainer.style.bottom = '30px';
        } else {
            // Desktop view - position to avoid side navbar
            aiAssistantContainer.style.right = '80px';
            aiAssistantContainer.style.bottom = '30px';
        }
    }
    
    // Call on load
    adjustAssistantPosition();
    
    // Call on resize
    window.addEventListener('resize', adjustAssistantPosition);
    
    // Auto-open chat if enabled in settings
    if (settings.autoOpen) {
        setTimeout(() => {
            aiAssistantChat.classList.add('active');
            scrollToBottom();
        }, 2000);
    }
    
    // Toggle chat window
    aiAssistantBubble.addEventListener('click', () => {
        aiAssistantChat.classList.add('active');
        scrollToBottom();
    });
    
    closeChat.addEventListener('click', () => {
        aiAssistantChat.classList.remove('active');
    });
    
    // Handle sending messages
    sendMessage.addEventListener('click', sendUserMessage);
    userMessage.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendUserMessage();
        }
    });
    
    // Auto-resize textarea
    userMessage.addEventListener('input', autoResizeTextarea);
    
    // Settings panel toggle
    settingsButton.addEventListener('click', toggleSettingsPanel);
    
    function toggleSettingsPanel() {
        const settingsPanel = document.querySelector('.settings-panel');
        settingsPanel.classList.toggle('active');
    }
    
    function createSettingsPanel() {
        const settingsPanel = document.createElement('div');
        settingsPanel.className = 'settings-panel';
        
        // Create settings panel content
        settingsPanel.innerHTML = `
            <div class="settings-header">
                <div class="settings-title">
                    <i class="ri-settings-3-line"></i>
                    <span>Settings</span>
                </div>
                <button class="close-chat" id="closeSettings">
                    <i class="ri-arrow-left-line"></i>
                </button>
            </div>
            
            <div class="settings-content">
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="ri-paint-brush-line"></i>
                        <span>Appearance</span>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-label">
                            <div class="setting-name">Theme</div>
                            <div class="setting-description">Change the chat interface theme</div>
                        </div>
                        <div class="setting-control">
                            <label class="toggle-switch">
                                <input type="checkbox" id="themeToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-label">
                            <div class="setting-name">Accent Color</div>
                            <div class="setting-description">Choose your preferred color</div>
                        </div>
                        <div class="setting-control">
                            <div class="color-options">
                                <div class="color-option blue" data-color="blue"></div>
                                <div class="color-option green" data-color="green"></div>
                                <div class="color-option purple" data-color="purple"></div>
                                <div class="color-option red" data-color="red"></div>
                                <div class="color-option orange" data-color="orange"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="ri-notification-3-line"></i>
                        <span>Notifications</span>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-label">
                            <div class="setting-name">Sound Effects</div>
                            <div class="setting-description">Enable sound for messages</div>
                        </div>
                        <div class="setting-control">
                            <label class="toggle-switch">
                                <input type="checkbox" id="soundToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-label">
                            <div class="setting-name">Auto Open Chat</div>
                            <div class="setting-description">Automatically open chat on page load</div>
                        </div>
                        <div class="setting-control">
                            <label class="toggle-switch">
                                <input type="checkbox" id="autoOpenToggle">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="ri-message-3-line"></i>
                        <span>Chat Preferences</span>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-label">
                            <div class="setting-name">Typing Speed</div>
                            <div class="setting-description">Adjust assistant response delay</div>
                        </div>
                        <div class="setting-control">
                            <div class="select-wrapper">
                                <select id="typingSpeedSelect">
                                    <option value="fast">Fast</option>
                                    <option value="medium">Medium</option>
                                    <option value="slow">Slow</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-label">
                            <div class="setting-name">Language</div>
                            <div class="setting-description">Select assistant language</div>
                        </div>
                        <div class="setting-control">
                            <div class="select-wrapper">
                                <select id="languageSelect">
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="de">Deutsch</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="settings-section">
                    <button id="clearChatButton" class="clear-chat-button">
                        <i class="ri-delete-bin-7-line"></i>
                        Clear Chat History
                    </button>
                    
                    <button id="resetSettingsButton" class="reset-settings-button">
                        <i class="ri-refresh-line"></i>
                        Reset to Default Settings
                    </button>
                </div>
            </div>
        `;
        
        // Append settings panel to chat
        aiAssistantChat.appendChild(settingsPanel);
        
        // Add event listeners for settings panel
        document.getElementById('closeSettings').addEventListener('click', toggleSettingsPanel);
        document.getElementById('themeToggle').addEventListener('change', updateThemeSetting);
        document.getElementById('soundToggle').addEventListener('change', updateSoundSetting);
        document.getElementById('autoOpenToggle').addEventListener('change', updateAutoOpenSetting);
        document.getElementById('typingSpeedSelect').addEventListener('change', updateTypingSpeedSetting);
        document.getElementById('languageSelect').addEventListener('change', updateLanguageSetting);
        document.getElementById('clearChatButton').addEventListener('click', clearChatHistory);
        document.getElementById('resetSettingsButton').addEventListener('click', resetSettings);
        
        // Set up color option listeners
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                updateAccentColorSetting(option.dataset.color);
            });
        });
    }
    
    // Settings functions
    function updateThemeSetting(e) {
        settings.theme = e.target.checked ? 'dark' : 'light';
        saveSettings();
        applyTheme();
    }
    
    function updateSoundSetting(e) {
        settings.soundEnabled = e.target.checked;
        saveSettings();
    }
    
    function updateAutoOpenSetting(e) {
        settings.autoOpen = e.target.checked;
        saveSettings();
    }
    
    function updateTypingSpeedSetting(e) {
        settings.typingSpeed = e.target.value;
        saveSettings();
    }
    
    function updateLanguageSetting(e) {
        settings.language = e.target.value;
        saveSettings();
    }
    
    function updateAccentColorSetting(color) {
        settings.accentColor = color;
        saveSettings();
        applyAccentColor();
        
        // Update active state in UI
        document.querySelectorAll('.color-option').forEach(option => {
            option.classList.toggle('active', option.dataset.color === color);
        });
    }
    
    function clearChatHistory() {
        if (confirm('Are you sure you want to clear all chat messages?')) {
            // Clear chat messages
            while (chatMessages.firstChild) {
                chatMessages.removeChild(chatMessages.firstChild);
            }
            
            // Add default welcome message
            addMessageToChat('assistant', "👋 Hi there! I'm Jayanthan Senthilkumar, your AI assistant. How can I help you today?");
            
            // Close settings panel
            toggleSettingsPanel();
        }
    }
    
    function resetSettings() {
        if (confirm('Are you sure you want to reset all settings to default?')) {
            settings = {
                theme: 'light',
                accentColor: 'blue',
                soundEnabled: true,
                autoOpen: false,
                typingSpeed: 'medium',
                language: 'en'
            };
            
            saveSettings();
            applySettings();
            toggleSettingsPanel();
        }
    }
    
    function saveSettings() {
        localStorage.setItem('aiAssistantSettings', JSON.stringify(settings));
    }
    
    function loadSettings() {
        const savedSettings = localStorage.getItem('aiAssistantSettings');
        return savedSettings ? JSON.parse(savedSettings) : null;
    }
    
    function applySettings() {
        // Apply theme
        applyTheme();
        
        // Apply accent color
        applyAccentColor();
        
        // Set form controls to match current settings
        document.getElementById('themeToggle').checked = settings.theme === 'dark';
        document.getElementById('soundToggle').checked = settings.soundEnabled;
        document.getElementById('autoOpenToggle').checked = settings.autoOpen;
        document.getElementById('typingSpeedSelect').value = settings.typingSpeed;
        document.getElementById('languageSelect').value = settings.language;
        
        // Highlight active color
        document.querySelectorAll('.color-option').forEach(option => {
            option.classList.toggle('active', option.dataset.color === settings.accentColor);
        });
    }
    
    function applyTheme() {
        aiAssistantChat.classList.toggle('dark-theme', settings.theme === 'dark');
    }
    
    function applyAccentColor() {
        // Remove existing color class
        const header = document.querySelector('.chat-header');
        const settingsHeader = document.querySelector('.settings-header');
        const sendBtn = document.getElementById('sendMessage');
        
        // Remove existing accent color classes
        const colorClasses = ['blue-accent', 'green-accent', 'purple-accent', 'red-accent', 'orange-accent'];
        [header, settingsHeader, sendBtn].forEach(el => {
            if (el) {
                colorClasses.forEach(cls => el.classList.remove(cls));
            }
        });
        
        // Apply selected color
        const colorClass = `${settings.accentColor}-accent`;
        [header, settingsHeader, sendBtn].forEach(el => {
            if (el) el.classList.add(colorClass);
        });
        
        // Dynamically update inline styles for header gradient
        const headerStyle = `linear-gradient(135deg, var(--${settings.accentColor}-500), var(--${settings.accentColor}-700))`;
        header.style.background = headerStyle;
        settingsHeader.style.background = headerStyle;
        sendBtn.style.background = `var(--${settings.accentColor}-500)`;
    }
    
    // Get response delay based on typing speed setting
    function getTypingDelay() {
        switch (settings.typingSpeed) {
            case 'fast': return 800;
            case 'slow': return 2500;
            default: return 1500; // medium
        }
    }
    
    function sendUserMessage() {
        const message = userMessage.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessageToChat('user', message);
        
        // Clear input field and reset height
        userMessage.value = '';
        userMessage.style.height = 'auto';
        
        // Play sound if enabled
        if (settings.soundEnabled) {
            playMessageSound('send');
        }
        
        // Show typing indicator
        showTypingIndicator();
        
        // Generate AI response after a delay based on typing speed setting
        setTimeout(() => {
            removeTypingIndicator();
            const response = generateResponse(message);
            addMessageToChat('assistant', response);
            
            // Play sound if enabled
            if (settings.soundEnabled) {
                playMessageSound('receive');
            }
        }, getTypingDelay());
    }
    
    // Play sound effects
    function playMessageSound(type) {
        const soundFile = type === 'send' ? 'message-sent.mp3' : 'message-received.mp3';
        // This is just a placeholder - you would need to add actual sound files
        // const sound = new Audio(`assets/sounds/${soundFile}`);
        // sound.play().catch(e => console.log('Sound play prevented: ', e));
    }
    
    // Rest of existing functions...
    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // Format URLs in the message as clickable links
        const formattedMessage = formatMessageWithLinks(message);
        
        // Add appropriate icon based on sender
        const iconClass = sender === 'user' ? 'ri-user-line' : 'ri-robot-line';
        
        messageElement.innerHTML = `
            <div class="message-bubble">
                <div class="message-icon">
                    <i class="${iconClass}"></i>
                </div>
                <div class="message-content">
                    <p>${formattedMessage}</p>
                    <span class="message-time">${currentTime}</span>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Function to format URLs as clickable links
    function formatMessageWithLinks(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, url => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chat-link">${url}</a>`);
    }
    
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message assistant typing';
        typingIndicator.innerHTML = `
            <div class="typing-indicator">
                <div class="message-icon">
                    <i class="ri-robot-line"></i>
                </div>
                <div class="typing-dots">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingIndicator);
        scrollToBottom();
    }
    
    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Function to understand user query more intelligently
    function analyzeQuery(message) {
        const lowerMessage = message.toLowerCase();
        
        // Define categories with keywords
        const categories = {
            greeting: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy'],
            about: ['about you', 'who are you', 'tell me about yourself', 'your background', 'introduce yourself', 'your profile', 'your story'],
            skills: ['skills', 'what can you do', 'expertise', 'technologies', 'tech stack', 'abilities', 'programming', 'coding', 'languages', 'frameworks', 'competencies'],
            projects: ['projects', 'portfolio', 'work', 'created', 'developed', 'built', 'applications', 'apps', 'websites', 'software', 'systems'],
            contact: ['contact', 'email', 'phone', 'reach', 'connect', 'call', 'message', 'get in touch', 'communication'],
            education: ['education', 'study', 'college', 'school', 'degree', 'qualification', 'academic', 'university', 'learn'],
            startup: ['startup', 'company', 'business', 'prisoltech', 'venture', 'enterprise', 'founder'],
            experience: ['experience', 'work history', 'career', 'professional', 'job', 'employment', 'worked at', 'industry']
        };
        
        // Find matching category
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                return category;
            }
        }
        
        return 'default';
    }
    
    function generateResponse(message) {
        const category = analyzeQuery(message);
        return getRandomResponse(responses[category] || responses.default);
    }
    
    function getRandomResponse(responseArray) {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function autoResizeTextarea() {
        // Reset height to default to properly calculate scroll height
        userMessage.style.height = 'auto';
        
        // Set new height based on content, with a minimum height
        const newHeight = Math.max(40, Math.min(userMessage.scrollHeight, 100));
        userMessage.style.height = `${newHeight}px`;
        
        // Ensure content is visible if max height is reached
        if (userMessage.scrollHeight > 100) {
            userMessage.style.overflowY = 'auto';
        } else {
            userMessage.style.overflowY = 'hidden';
        }
    }
    
    // Initialize textarea height when page loads
    document.addEventListener('DOMContentLoaded', () => {
        // Set initial textarea height
        userMessage.style.height = '40px';
    });
    
    // Emoji picker functionality - FIXED
    emojiButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        
        // Check if emoji picker already exists
        let emojiPicker = document.querySelector('.emoji-picker');
        
        if (emojiPicker) {
            emojiPicker.remove();
            return;
        }
        
        // Create emoji picker
        emojiPicker = document.createElement('div');
        emojiPicker.className = 'emoji-picker';
        
        // Add emojis
        commonEmojis.forEach(emoji => {
            const emojiElement = document.createElement('span');
            emojiElement.className = 'emoji';
            emojiElement.textContent = emoji;
            emojiElement.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                userMessage.value += emoji;
                userMessage.focus();
                autoResizeTextarea(); // Auto-resize after adding emoji
            });
            emojiPicker.appendChild(emojiElement);
        });
        
        // Position and show emoji picker - FIXED
        const chatInput = document.querySelector('.chat-input');
        chatInput.appendChild(emojiPicker);
        
        // Ensure the picker is visible within the chat window
        const emojiPickerRect = emojiPicker.getBoundingClientRect();
        const chatRect = aiAssistantChat.getBoundingClientRect();
        
        if (emojiPickerRect.top < chatRect.top) {
            emojiPicker.style.bottom = 'auto';
            emojiPicker.style.top = '100%';
            emojiPicker.style.marginTop = '5px';
        }
        
        // Close emoji picker when clicking outside
        const closeEmojiPicker = (event) => {
            if (!emojiPicker.contains(event.target) && event.target !== emojiButton) {
                emojiPicker.remove();
                document.removeEventListener('click', closeEmojiPicker);
            }
        };
        
        // Add small delay to avoid instant closing
        setTimeout(() => {
            document.addEventListener('click', closeEmojiPicker);
        }, 100);
    });
    
    // File attachment functionality
    attachButton.addEventListener('click', () => {
        // Simulate file input click
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*, .pdf, .doc, .docx';
        fileInput.style.display = 'none';
        
        document.body.appendChild(fileInput);
        
        fileInput.click();
        
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                
                // Show file attachment in chat
                addAttachmentMessage(file);
                
                // Remove the temporary input element
                document.body.removeChild(fileInput);
            }
        });
    });
    
    function addAttachmentMessage(file) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user';
        
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // Create file icon based on type
        let fileIcon = 'ri-file-line';
        if (file.type.includes('image')) {
            fileIcon = 'ri-image-line';
        } else if (file.type.includes('pdf')) {
            fileIcon = 'ri-file-pdf-line';
        } else if (file.type.includes('word') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
            fileIcon = 'ri-file-word-line';
        }
        
        messageElement.innerHTML = `
            <div class="message-bubble">
                <div class="message-icon">
                    <i class="ri-user-line"></i>
                </div>
                <div class="message-content">
                    <div class="attachment">
                        <i class="${fileIcon}"></i>
                        <span class="file-name">${file.name}</span>
                    </div>
                    <span class="message-time">${currentTime}</span>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(messageElement);
        scrollToBottom();
        
        // Simulate assistant response
        showTypingIndicator();
        
        setTimeout(() => {
            removeTypingIndicator();
            addMessageToChat('assistant', `I've received your file "${file.name}". How can I help you with this?`);
        }, 1500);
    }
});
