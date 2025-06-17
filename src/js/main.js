// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('button[aria-label="Toggle navigation"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Lazy loading for images (if any)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add reading time estimation for blog posts
function addReadingTime() {
    const postContent = document.querySelector('.prose-custom');
    if (postContent) {
        const text = postContent.textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
        
        const readingTimeElement = document.createElement('div');
        readingTimeElement.className = 'text-sm text-secondary-500 mt-4';
        readingTimeElement.innerHTML = `<span>📖 ${readingTime} min read</span>`;
        
        const postHeader = document.querySelector('.post-header');
        if (postHeader) {
            postHeader.appendChild(readingTimeElement);
        }
    }
}

// Add table of contents for long posts
function addTableOfContents() {
    const postContent = document.querySelector('.prose-custom');
    if (postContent) {
        const headings = postContent.querySelectorAll('h2, h3, h4');
        
        if (headings.length > 3) {
            const toc = document.createElement('div');
            toc.className = 'bg-secondary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8';
            toc.innerHTML = '<h3 class="text-lg font-semibold mb-4 text-secondary-900">Table of Contents</h3><ul class="space-y-2"></ul>';
            
            const tocList = toc.querySelector('ul');
            
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${id}`;
                a.textContent = heading.textContent;
                a.className = `text-secondary-600 hover:text-primary-600 transition-colors block ${heading.tagName.toLowerCase() === 'h2' ? 'font-medium' : heading.tagName.toLowerCase() === 'h3' ? 'ml-4' : 'ml-8'}`;
                
                li.appendChild(a);
                tocList.appendChild(li);
            });
            
            postContent.insertBefore(toc, postContent.firstChild);
        }
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    addReadingTime();
    addTableOfContents();
});

// Add line-clamp utility for text truncation
const lineClampStyles = document.createElement('style');
lineClampStyles.textContent = `
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(lineClampStyles); 