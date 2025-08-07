document.addEventListener('DOMContentLoaded', function() {
    // Navbar Toggle Functionality
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
        
        // Change icon based on state
        const icon = this.querySelector('i');
        if (navbarCollapse.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close navbar when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navbarCollapse.classList.remove('show');
                navbarToggler.querySelector('i').classList.remove('fa-times');
                navbarToggler.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mark reminder as complete
    const completeButtons = document.querySelectorAll('.btn-complete');
    completeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reminderItem = this.closest('.reminder-item');
            reminderItem.classList.add('completed');
            
            // Change button to undo
            this.innerHTML = '<i class="fas fa-undo"></i>';
            this.classList.remove('btn-complete');
            this.classList.add('btn-undo');
            
            // Update status text
            const dueText = reminderItem.querySelector('.reminder-due');
            if (dueText) {
                dueText.textContent = 'Completed just now';
            }
        });
    });
    
    // Undo completed reminder
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-undo')) {
            const button = e.target.closest('.btn-undo');
            const reminderItem = button.closest('.reminder-item');
            reminderItem.classList.remove('completed');
            
            // Change button back to complete
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.classList.remove('btn-undo');
            button.classList.add('btn-complete');
            
            // Update status text
            const dueText = reminderItem.querySelector('.reminder-due');
            if (dueText) {
                dueText.textContent = 'Due in 2 days'; // You would update this with actual data
            }
        }
    });
});