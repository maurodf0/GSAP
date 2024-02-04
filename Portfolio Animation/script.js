
        //normal way
       // const links = document.querySelectorAll('li a');

       //GSAP way\
       const links = gsap.utils.toArray('li a');

        links.forEach(link => {
            const primary = link.querySelector('.primary');
            const secondary = link.querySelector('.secondary');
            const date = link.querySelector('.date');
            const line = link.querySelector('.line');

            const tl = gsap.timeline();

            gsap.set([line, date],{
                opacity:0,
                scale:0
            })

            tl.pause();

            tl.to(primary, {
                y: -20
            })
            .to(secondary, {
                y: -30,
                duration: .6
            }, '<')
            .to([line, date],{
                opacity:1,
                scale:1
            }, '-=.5');

            link.addEventListener('mouseenter', () => {
                tl.play();
            });
            link.addEventListener('mouseleave', () => {
                tl.reverse();
            })
        });



