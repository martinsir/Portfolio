/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // =========================================================
    // Active navigation section
    // Automatically uses navbar links with section fragments
    // =========================================================

    const navLinks = Array.from(
        document.querySelectorAll('#mainNav .nav-link')
    );

    const sections = navLinks
        .map(link => {

            const url = new URL(link.href, window.location.href);
            const sectionId = url.hash.replace('#', '');

            if (!sectionId) {
                return null;
            }

            return document.getElementById(sectionId);
        })
        .filter(section => section !== null);


    function updateActiveNav() {

        const detectionPoint = window.innerHeight * 0.35;

        let activeSection = null;

        sections.forEach(section => {

            const rect = section.getBoundingClientRect();

            if (
                rect.top <= detectionPoint &&
                rect.bottom > detectionPoint
            ) {
                activeSection = section.id;
            }

        });


        // If we reached the bottom,
        // activate whatever the final section is.
        const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 5;

        if (atBottom && sections.length > 0) {
            activeSection = sections[sections.length - 1].id;
        }


        navLinks.forEach(link => {

            link.classList.remove('active');

            const url = new URL(link.href, window.location.href);

            if (
                activeSection &&
                url.hash === `#${activeSection}`
            ) {
                link.classList.add('active');
            }

        });
    }


    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('resize', updateActiveNav);

    updateActiveNav();

    //
    //END Active navigation section
    //



    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// =========================================================
// GitHub terminal - 3D mouse tilt
// =========================================================

const githubTerminal = document.querySelector('.github-terminal');

if (
    githubTerminal &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
) {

    const maxTilt = 8;

    githubTerminal.addEventListener('mousemove', function (event) {

        const rect = githubTerminal.getBoundingClientRect();

        // Mouse position inside the terminal
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Convert position to a value between -0.5 and +0.5
        const x = mouseX / rect.width - 0.5;
        const y = mouseY / rect.height - 0.5;

        // Vertical mouse movement controls rotateX
        const rotateX = -y * maxTilt * 2;

        // Horizontal mouse movement controls rotateY
        const rotateY = x * maxTilt * 2;

        githubTerminal.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;
    });


    githubTerminal.addEventListener('mouseleave', function () {

        githubTerminal.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
        `;
    });
}

// =========================================================
// Contact cards - 3D mouse tilt
// =========================================================

const contactCards = document.querySelectorAll('.contact-section .card');

if (
    contactCards.length > 0 &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
) {

    const cardMaxTilt = 10;

    contactCards.forEach(card => {

        card.addEventListener('mousemove', function (event) {

            const rect = card.getBoundingClientRect();

            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const x = mouseX / rect.width - 0.5;
            const y = mouseY / rect.height - 0.5;

            const rotateX = -y * cardMaxTilt * 2;
            const rotateY = x * cardMaxTilt * 2;

            card.style.transform = `
                perspective(650px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        });


        card.addEventListener('mouseleave', function () {

            card.style.transform = `
                perspective(650px)
                rotateX(0deg)
                rotateY(0deg)
            `;
        });

    });
}
// =========================================================
// GitHub terminal - typewriter sequence
// =========================================================

const terminal = document.querySelector('.github-terminal');

if (terminal) {

    const commands = terminal.querySelectorAll('.terminal-command');

    let terminalPlayed = false;


    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }


    async function typeCommand(commandElement) {

        const typeElement =
            commandElement.querySelector('.terminal-type');

        const cursor =
            commandElement.querySelector('.terminal-cursor');

        const text =
            typeElement.dataset.text;

        typeElement.textContent = '';


        for (let i = 0; i < text.length; i++) {

            typeElement.textContent += text[i];

            await sleep(90);
        }


        await sleep(300);

        cursor.classList.add('finished');


        const response =
            commandElement.nextElementSibling;

        if (
            response &&
            response.classList.contains('terminal-response')
        ) {
            response.classList.add('show');
        }


        await sleep(600);
    }


    async function runTerminal() {

        if (terminalPlayed) {
            return;
        }

        terminalPlayed = true;


        for (const command of commands) {
            await typeCommand(command);
        }
    }


    const prefersReducedMotion =
        window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;


    if (prefersReducedMotion) {

        commands.forEach(command => {

            const typeElement =
                command.querySelector('.terminal-type');

            const cursor =
                command.querySelector('.terminal-cursor');

            typeElement.textContent =
                typeElement.dataset.text;

            cursor.classList.add('finished');


            const response =
                command.nextElementSibling;

            if (response) {
                response.classList.add('show');
            }

        });

    }

    else {

        const terminalObserver =
            new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        runTerminal();

                        terminalObserver.disconnect();
                    }

                });

            }, {
                threshold: 0.4
            });


        terminalObserver.observe(terminal);
    }
}