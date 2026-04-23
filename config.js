var config = {
    style: 'mapbox://styles/pancorb/cmo6ozl9c000901ruf2yh213e',
    accessToken: prompt("Please enter a Mapbox access token:"),
    projection: 'globe',
    theme: 'light',
    title: '<u><span style="font-weight: 500"><i>Car</i><span style="font-weight: 500"><span style="font-weight: 900"><i>ril</i>politik<span style="font-weight: 900">:</u>',
    subtitle: '<span style="font-weight: 600">Power Struggles Hashed Over the Mexico City Metro<span style="font-weight: 600">',
    byline: 'By Joseph Giarratano',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'tutorial',
            alignment: 'full',
            title: 'Tutorial',
            description: '<p>Welcome!</p><p>The only interaction required is to scroll down (scrolling ridiculously fast may not allow the map to upload properly); the entire website is contained on this one page.</p><p>For the best experience, please view this on a computer with an up-to-date version of Firefox or Chrome with JavaScript enabled (enabled is the default).</p><p>All quote are originally in Spanish; see the sources for their original texts.</p><p>You may click any endnote link to see the endnote, and there will be a "↩" to return to what you were reading.</p><p>The top right corner, when applicable, will have an info box with the legend/sources of and/or extra info about the map.</p><p>For a shortened version without context (since this is very long, and Parts I, IIa, IVa, and IVb are all context), click when you see a "↓ Skip to main content" button at the bottom of your screen.</p><p><strong>Enjoy!</strong></p>',
            location: {
                center: [-102.89258, 23.71025],
                zoom: 4.15,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'contents',
            alignment: 'full',
            title: 'Table of Contents',
            description: `
            <a href="#tutorial">Tutorial</a><br>
            <a href="#contents">Table of Contents</a><br>
            <a href="#introduction">Introduction</a><br>
            <a href="#p1">Part I: The Problem</a><br>
            <ol type="a">
                <li><a href="#p1s1a">What is Mexico City?</a></li>
                <li><a href="#p1s2">What was the PRI?</a></li>
                <li><a href="#p1s3a">The Metro's Ancestors</a></li>
                <li><a href="#p1s4a">The Monstrous, Swollen Head</a></li>
            </ol>
            <a href="#p2">Part II: The Solutions</a><br>
            <ol type="a">
                <li><a href="#p2s1">Who was Everyone?</a></li>
                <li><a href="#p2s2a">The ICA's Solution</a></li>
                <li><a href="#p2s3">Alternatives</a></li>
                <li><a href="#p2s4a">Research Question</a></li>
            </ol>
            <a href="#p3">Part III: Uruchurtu vs. Díaz Ordaz</a><br>
            <ol type="a">
                <li><a href="#p3s1a">Uruchurtu and the Alianza</a></li>
                <li><a href="#p3s2">Díaz Ordaz and the ICA</a></li>
                <li><a href="#p3s3a">Uruchurtu vs. Díaz Ordaz</a></li>
                <li><a href="#p3s4">Self-Interest or Public Good?</a></li>
            </ol>
            <a href="#p4">Part IV: Full Steam Ahead</a><br>
            <ol type="a">
                <li><a href="#p4s1a">Technical Difficulties</a></li>
                <li><a href="#p4s2">The Metro's Inauguration</a></li>
                <li><a href="#p4s3">Economic Collapse</a></li>
                <li><a href="#p4s4a">Metro Collapse</a></li>
            </ol>
            <a href="#p5">Part V: Echeverría-Era Freeze</a><br>
            <ol type="a">
                <li><a href="#p5s1">Economic Slump Theory</a></li>
                <li><a href="#p5s2">Echeverrían Freeze Theory</a></li>
                <li><a href="#p5s3">False Flag Theory</a></li>
                <li><a href="#p5s4">Again: Self-Interest or Public Good?</a></li>
            </ol>
            <a href="#p6">Part VI: Conclusion</a><br>
            <ol type="a">
                <li><a href="#p6s1">Recap: Uruchurtu vs. Díaz Ordaz</a></li>
                <li><a href="#p6s2">Recap: Echeverría-Era Freeze</a></li>
                <li><a href="#p6s3">Bigger Picture</a></li>
                <li><a href="#p6s4">Takeaways</a></li>
            </ol>
            <a href="#bibliography">Bibliography</a><br>
            <a href="#endnotes">Endnotes</a><br>`,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'introduction',
            alignment: 'full',
            title: 'Introduction',
            image: 'https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=1982,h=1320,q=80/content/images/ac967740568fa7a210aba1cfcbf581f0d3703651.jpeg',
            eval: 'showSkip("p2s2a")',
            description:
            `<blockquote>The path chosen to resolve the old problems of Mexico wasn't a path but a wall against which we've shattered. [... D]emographic, political, economic, and cultural centralization [...] has converted Mexico City into a monstrous, swollen head that crushes the frail body that sustains it.</blockquote>
            <p style="text-align: right">Octavio Paz, "Vuelta al Laberinto"<sup><a id="ref1" href="#foot1">1</a></sup></p style="text-align: right">
            <p>That was the state Mexico City was at in the 20th century. Everyone in Mexico was looking to its capital for work and urban life, but the capital was sinking under their weight… literally.</p>
            
            <p>The question of what to do about this problem led to two episodes: a struggle between President Gustavo Díaz Ordaz and Mexico City Regent Ernesto Uruchurtu on whether to create a metro system, and Luis Echeverría Álvarez's neglect of the Metro that allegedly was to blame for a train collision that killed dozens and injured nearly a hundred more. Both episodes led to the same questions under which their politicians can be scrutinized. <strong>Which stakeholders influenced the political development of the Mexico City Metro: politicians and their self-interest, the will of the people, or the expected benefit of the people? Who benefitted the most in hindsight?</strong></p>
            `,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1',
            alignment: 'center',
            description: '<p style="text-align: center; font-size: 48px">Part I: The Problem</p>',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s1a',
            alignment: 'full',
            title: 'What is Mexico City?',
            description: 'This is Mexico! It has 31 states as well as Mexico City as part of the Federal District, similar to how the U.S. has 50 states and Washington as part of the District of Columbia.',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s1b',
            alignment: 'full',
            description: 'Mexico City is the capital of Mexico, and by far the most populated part of it. While that sounds easy, legally, it\'s complicated.',
            onChapterEnter: [],
            onChapterExit: [],
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            info: "",
            onChapterEnter: [
                {
                    layer: 'distrito federal',
                    opacity: 0
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'p1s1c',
            alignment: 'full',
            description: `This was (not anymore today; see note) the Federal District, headed by its own regent, which functions like a mayor, but is technically part of the president's cabinet.<sup><a id="ref2" href="#foot2">2</a></sup> Yet, most of the population of Mexico City isn't contained in these borders.`,
            location: {
                center: [-99.13867, 19.30948],
                zoom: 9.25,
                pitch: 0,
                bearing: 0
            },
            info: "Orange: boundaries of the Federal District",
            onChapterEnter: [
                {
                    layer: 'distrito federal',
                    opacity: 0.5,
                },
                {
                    layer: 'mexico state',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'p1s1d',
            alignment: 'full',
            description: 'This is Mexico. Not the country or the city, but the state. Dizzy yet?',
            location: {
                center: [-99.55050, 19.28578],
                zoom: 7.05,
                pitch: 0,
                bearing: 0
            },
            info: "Orange: boundaries of the Federal District<br>Green: boundaries of Mexico",
            onChapterEnter: [
                {
                    layer: 'mexico state',
                    opacity: 0.5,
                },
                {
                    layer: 'morelos',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'p1s1e',
            alignment: 'full',
            description: `Mexico borders the Federal District almost entirely, with the exception of the part bordering Morelos. These are states, so they're not controlled by the federal government the same way the Federal District was. These states surround Mexico City, and have most of the population of the greater metropolitan area. This will be referred to either by the names of the specific states, or as the "periphery".`,
            location: {
                center: [-99.55050, 19.28578],
                zoom: 7.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            info: "Orange: boundaries of the Federal District<br>Green: boundaries of Mexico<br>Blue: boundaries of Morelos",
            onChapterEnter: [
                {
                    layer: 'morelos',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'distrito federal',
                    opacity: 0
                },
                {
                    layer: 'mexico state',
                    opacity: 0
                },
                {
                    layer: 'morelos',
                    opacity: 0
                }
            ]
        },
        {
            id: 'p1s1f',
            alignment: 'full',
            description: `Mexico City isn't just confusing legally; it's a mess geographically as well.`,
            location: {
                center: [-99.55050, 19.28578],
                zoom: 7.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s1g',
            alignment: 'full',
            description: 'Mexico City sits on a lake. Why?',
            location: {
                center: [-99.55050, 19.28578],
                zoom: 7.05,
                pitch: 0,
                bearing: 0
            },
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Basin_of_Mexico_1519_map-en.svg/960px-Basin_of_Mexico_1519_map-en.svg.png',
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s1h',
            alignment: 'full',
            description: 'According to legend and as told on the Mexican flag, the Aztecs were told by their patron god (Huitzilopochtli) to build their city where they saw an eagle eating a snake perched on a cactus.<sup><a id="ref3" href="#foot3">3</a></sup> Unfortunately, they saw an eagle eating a snake perched on a cactus on an island on a lake in a valley surrounded by mountains, which is… not ideal. This will end up making tunnel-boring difficult, expensive, and precarious.',
            location: {
                center: [-99.55050, 19.28578],
                zoom: 7.05,
                pitch: 0,
                bearing: 0
            },
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s2',
            alignment: 'full',
            title: 'What was the PRI?',
            description: 'Back to all of Mexico. Since Mexico City is by far the largest city, national politics revolves a lot around the capital. The dominating party was the Partido Revolucionario Institucional (Institutional Revolutionary Party), or PRI. Although it started under different names, it held uninterrupted power from 1929 to 2000, winning every election by a landslide. By no means were elections like these fully democratic, but regardless, winning the PRI nomination (given by party leadership) for a given office was effectively winning the office, and opposition parties did exist with some support.<sup><a id="ref4" href="#foot4">4</a></sup>',
            location: {
                center: [-102.89258, 23.71025],
                zoom: 4.15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s3a',
            alignment: 'full',
            title: 'The Metro\'s Ancestors',
            description: 'While metro systems are the quintessential public transit, they were not the first in Mexico City.',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s3b',
            alignment: 'full',
            description: 'Trams were first mule-drawn carriages. They then went electric, starting out with 35 vehicles in 1900, expanding to 514 by their peak in 1950, and disappearing by 1985. They served not only to move people on their commute, but goods as well, between businesses and homes.<sup><a id="ref6" href="#foot6">6</a></sup>',
            info: 'Tram routes were traced as close as possible. See original source.<sup><a id="ref5" href="#foot5">5</a></sup>',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'trams',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'trams',
                    opacity: 0
                }
            ]
        },
        {
            id: 'p1s3c',
            alignment: 'full',
            description: '<p>Buses came next, starting in 1917. By 1945, however, they already surpassed trams in number. This was thanks to both greater subsidies from the government and their greater flexibility, which proved vital for a city that started growing rapidly around that time.<sup><a id="ref8" href="#foot8">8</a></sup></p>',
            info: 'Bus routes are simplified and only represent the rough starts and ends of different routes. See original source.<sup><a id="ref7" href="#foot7">7</a></sup>',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'buses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'buses',
                    opacity: 0
                }
            ]
        },
        {
            id: 'p1s3d',
            alignment: 'full',
            description: 'Cars came third. They only grew in popularity around 1950 because only the tiny bourgeoisie and middle class could afford it.<sup><a id="ref9" href="#foot9">9</a></sup> While those groups owned their cars, taxis became popular around 1980.<sup><a id="ref10" href="#foot10">10</a></sup>',
            info: 'Map represents present-day major roads, which are largely unchanged within the city center.',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'cars',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'cars',
                    opacity: 0
                }
            ]
        },
        {
            id: 'p1s4a',
            alignment: 'full',
            title: 'The Monstrous, Swollen Head',
            description: 'Population growth was a massive issue.',
            callback: '',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s4b',
            alignment: 'full',
            description: 'It grew population numbers both higher…',
            info: 'Map is of population density in 1940.<sup><a id="ref11" href="#foot11">11</a></sup> White: <250 people/km<sup>2</sup><br>Green: 250-5000 people/km<sup>2</sup><br>Yellow: 5000-10000 people/km<sup>2</sup><br>Orange: 10000-15000 people/km<sup>2</sup><br>Red: 15000-20000 people/km<sup>2</sup><br>Maroon: >20000 people/km<sup>2</sup><br>For reference, in 2020, Manhattan would be maroon, The Bronx and Brooklyn orange, Queens yellow, and Staten Island green.<sup><a id="ref12" href="#foot12">12</a></sup>',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1940s density',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '1940s density',
                    opacity: 0
                }
            ]
        },
        {
            id: 'p1s4c',
            alignment: 'full',
            description: '…and wider, out into the periphery.',
            info: 'Map is of population density in 1960. Mexico state also gets significant population increases at this time, but granular data for it is scarce.<sup><a id="ref13" href="#foot13">13</a></sup><br>White: <250 people/km<sup>2</sup><br>Green: 250-5000 people/km<sup>2</sup><br>Yellow: 5000-10000 people/km<sup>2</sup><br>Orange: 10000-15000 people/km<sup>2</sup><br>Red: 15000-20000 people/km<sup>2</sup><br>Maroon: >20000 people/km<sup>2</sup><br>For reference, in 2020, Manhattan would be maroon, The Bronx and Brooklyn orange, Queens yellow, and Staten Island green.<sup><a id="ref14" href="#foot14">14</a></sup>',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1960s density',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '1960s density',
                    opacity: 0
                }
            ]
        },
        {
            id: 'p1s4d',
            alignment: 'full',
            description: 'As the city grew…',
            callback: '',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s4e',
            alignment: 'full',
            description: '…so did demand for transit in the city center. Since trams, buses, and cars all ran on the same streets, all three contributed to the same street traffic. As population skyrocketed, commutes got so slow that it would be faster to get out and walk through the city center rather than sit in traffic there.',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p1s4f',
            alignment: 'full',
            description: `
            The city's overpopulation problem was twofold. First, as education and healthcare improved in the 1940s, mortality decreased, and the population rose nationwide.<sup><a id="ref16" href="#foot16">16</a></sup> Then, Mexico City rapidly industrialized (the sector doubled in size from 1950–1960), and so its population tripled from 1940–1960 as many people moved away from rural areas towards the capital for work.<sup><a id="ref17" href="#foot17">17</a></sup><br>
            To make matters worse, as the city industrialized, labor specialized. This meant people had to go to specific workplaces that might have been across the city from where they lived, spending more time occupying precious road space.<sup><a id="ref18" href="#foot18">18</a></sup> Poor zoning exacerbated this issue even further by keeping residences at the edges and workplaces in the city center.<sup><a id="ref19" href="#foot19">19</a></sup>
            In addition to the numerous problems that led to longer distances between more people and more workplaces, those commutes were also poorly routed due to a variety of factors:<sup><a id="ref20" href="#foot20">20</a></sup>
            <ul>
                <li>The lack of continuity in major avenues</li>
                <li>Aging transportation equipment</li>
                <li>75% of routes going directly to the area surrounding the Plaza de la Constitución (the historical hub of the city center)</li>
                <li>Poor coordination between the different buses and train lines.</li>
            </ul>This made commutes:<ul>
                <li>All forced through the same few jagged bottlenecks</li>
                <li>Slow and unreliable</li>
                <li>Inevitably crossing through the busiest part of the city, which both increased total distance and reduced average speed</li>
                <li>Require more legs than would be necessary with proper coordination</li>

            </ul>For all of these reasons and more, it quickly became apparent that the city was growing quicker than it could handle. Mexican author Octavio Paz blamed not uncontrollable factors, nor even one political actor, but the entire line of presidents of the time:
            <br>
            <img src="https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=1982,h=1320,q=80/content/images/ac967740568fa7a210aba1cfcbf581f0d3703651.jpeg" style="float: right; padding: 10px; width: 30vw;"></img>
            <blockquote>Neither Cárdenas [President of Mexico, 1934–1940] nor his successors suspected what the future had in store and they did not know how to prevent the disastrous consequences of the thoughtless cult of development and relentless industrialization. The conservative policy of his successors — the short-sighted adoption of North American-style development — did not create but rather precipitated what was already evident: failure. The path chosen to resolve the old problems of Mexico wasn't a path but a wall against which we've shattered. Engaged in the "modernization" of the country, none of our governors — all of them surrounded by advisors, "experts" and ideologicals — have realized in time the dangers of excessive and uncontrolled population growth. The "other" Mexico, the undeveloped, grows quicker than the developed and will end by drowning it. Nor did they take measures against demographic, political, economic, and cultural centralization, that has converted Mexico City into a monstrous, swollen head that crushes the frail body that sustains it. Despite the fact that it would be enough for one to peek across the border to find out that in big North American cities the air was already unbreathable — not to mention the other physical and moral horrors of industrial societies — they did nothing against air pollution. Nor prevented the gigantic failure of education plans and the collapse of higher education... Should I continue?</blockquote>
            <p style="text-align: right">Octavio Paz, "Vuelta al Laberinto"<sup><a id="ref21" href="#foot21">21</a></sup></p style="text-align: right">
            <br>
            This sentiment was not unique to Paz; Mexico City Regent Uruchurtu, who actually had power over Mexico City, echoed it. He lamented "metropolitan gigantism" and "capital city macrocephaly"—both calling the size of his city a disease, with the latter mirroring Paz' "swollen head" phrase exactly with "macrocephaly".<sup><a id="ref22" href="#foot22">22</a></sup>
            <br><br>
            Paz points to centralization and modernization as the major issues. <strong>Who can save Mexico City's head? How? Will they succeed?</strong>
            `,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p2',
            alignment: 'center',
            description: '<p style="text-align: center; font-size: 48px">Part II: The Solutions</p>',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p2s1',
            alignment: 'full',
            title: 'Who was Everyone?',
            description: `<p>Before looking at solutions, first it's important to answer who can save the capital. There are many players in the first fight that culminates in 1966:</p>

        <img src="https://www.biografiasyvidas.com/biografia/d/fotos/diaz_ordaz.jpg" style="float: left; padding: 10px; width: 15vw;"></img>

        <p>First, the President of Mexico at the time, Gustavo Díaz Ordaz Bolaños, serving 1964–1970. Six years is the constitutionally provided presidential term length, and reelection is constitutionally prohibited.<sup><a id="ref23" href="#foot23">23</a></sup></p>

        <img src="https://lasillarota.com/u/fotografias/m/2023/12/19/f768x1-529265_529392_5050.jpg" style="float: right; padding: 10px; width: 15vw;"></img>

        <p>Next comes Díaz Ordaz' future rival, Mexico City Regent Ernesto Uruchurtu Peralta. Uruchurtu had a lot of experience by the time Díaz Ordaz made it to the presidency; he previously served under two other Presidents before (under Ruiz Cortines 1952–1958, and under López Mateos 1958–1964). Mexico City Regents were appointed by Presidents, since they were technically members of the federal Cabinet, and there were no term restrictions for the post.</p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PRI_logo_%28Mexico%29.svg/500px-PRI_logo_%28Mexico%29.svg.png" style="float: left; padding: 10px; width: 15vw;"></img>

        <p>Despite their differences, they were both a part of the PRI, as all but a requirement to have a place in government. While the PRI rigged elections to some extent, it wasn't a completely authoritarian government. So, maintaining popular approval of the PRI was important to its members, which required the image of a unified party.</p>

        <p>Getting more into the inner workings of the government, is the Federación de Trabajadores del Distrito Federal (Federation of Workers of the Federal District), or FTDF, which is a branch of the Confederación Nacional de Trabajadores Mexicanos (National Confederation of Mexican Workers), or CTM. They were, for all intents and purposes, run by the PRI. While the FTDF's purpose on paper was to represent the interests of the Federal District's workers' unions, in practice it was to keep control over those unions to maintain everything running smoothly according to how the PRI wanted it.<sup><a id="ref24" href="#foot24">24</a></sup></p>

        <p>Next on the list is the Alianza de Camioneros de México (Bus Operators' Alliance of Mexico), an employer's union that successfully monopolized Mexico City bus transit.<sup><a id="ref25" href="#foot25">25</a></sup> Organizationally, it was a powerful group of employers whose employees owned their own buses but operated under the rules of their employers.<sup><a id="ref26" href="#foot26">26</a></sup> It was not controlled by the government, but it was often politically active in support of the PRI and had a symbiotic relationship with them.<sup><a id="ref27" href="#foot27">27</a></sup></p>

        </p>Last, but not least, is the Ingenieros Civiles Asociados (Associated Civil Engineers), or ICA. It developed essentially a monopoly over public works projects, taking part in every part of the process from government, to planning, research, and design, to every branch of engineering and construction.<sup><a id="ref28" href="#foot28">28</a></sup> While it was not controlled by the government, many top members of the ICA had a lot of influence in invisible positions in government.<sup><a id="ref29" href="#foot29">29</a></sup></p>
        `,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p2s2a',
            alignment: 'full',
            eval: 'hideSkip()',
            title: "The ICA's Solution",
            description: `<p>In 1958, the ICA released their "Estudio de Vías Rápidas para la Ciudad de México" ("Study of Rapid Routes for Mexico City"), comparing 33 different global case studies and then making judgements and proposals for Mexico City.<sup><a id="ref30" href="#foot30">30</a></sup> It had major flaws, like comparing the Metro to cars without considering buses' potential, and significant underestimation of cost, but it was influential nonetheless.<sup><a id="ref31" href="#foot31">31</a></sup> The report concluded that the new mode of transport had to be an underground metro, to avoid the pitfalls of previous proposals (destruction of historic buildings and displacement of the city center's residents).<sup><a id="ref32" href="#foot32">32</a></sup> The report proposed the following principles moving forward, among others:</p>
            
            <table><tr><th>Principle</th><th>Why would the ICA propose this?</th></tr><tr><td>Serve existing popular corridors<sup><a id="ref33" href="#foot33">33</a></sup></td><td>To save money in creating new corridors; which would help ICA's financial interests (see more below)</td></tr><tr><td>Serve the most congested areas<sup><a id="ref34" href="#foot34">34</a></sup></td><td rowspan=4>To reduce the number of transfers required to get to a given place</td></tr><tr><td>Serve points of interest throughout the city<sup><a id="ref35" href="#foot35">35</a></sup></td><td></td></tr><tr><td>Save time by using straight lines and creating interchanges<sup><a id="ref36" href="#foot36">36</a></sup></td><td></td></tr><tr><td>Have the majority of the public living in the city center be walking distance from a metro station<sup><a id="ref37" href="#foot37">37</a></sup></td><td></td></tr><tr><td>Preserve the historical elements of the city center<sup><a id="ref38" href="#foot38">38</a></sup></td><td>To protect the centuries-old history that remains a valuable part of Mexican culture; as such, the underground artifacts that were discovered were treated carefully when building the Metro stations later<sup><a id="ref39" href="#foot39">39</a></sup></td></tr><tr><td>Don't harm existing modes of transport<sup><a id="ref40" href="#foot40">40</a></sup></td><td>To increase efficiency, but would also serve to protect the status quo enjoyed by the Alianza (see below)</td></tr><tr><td>Avoid suburban bus routes having to go to the city center<sup><a id="ref41" href="#foot41">41</a></sup></td><td>Both to reduce the amount of legs per trip as well as to reduce the load forced through the crowded city center</td></tr><tr><td>Eliminate the tram lines from the city center<sup><a id="ref42" href="#foot42">42</a></sup></td><td>To open up more space for other forms of transit to travel through, since the trams were getting old anyway</td></tr></table>
            
            <p>This report was helpful to many groups for many reasons.</p>
            
            <p>First, since public transit was vital for many commuters who couldn't afford cars, workplaces stood to benefit from their workers showing up on time with reliable and plentiful service. Of course, with the increasing congestion, this was not the case; companies lost MXP$50M (in March 2026 worth USD$46M) daily just due to their workers losing hours commuting, so they demanded the government build either better public transportation or housing for their workers.<sup><a id="ref43" href="#foot43">43</a></sup> So, the ICA offered a solution to the former.</p>`,
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p2s2b',
            alignment: 'full',
            image: 'https://walker-web.imgix.net/cms/Lance_Wyman_mexico-68-olympics-04-1.jpg?auto=format,compress&w=1920&h=1200&fit=crop&dpr=1.5',
            description: `<p>Second, while it wasn't known at the time of releasing the report, Mexico City would be the host of the 1968 Olympics. If it had been done on time, the Metro would've helped to accommodate transportation demand that would have been even higher-than-usual with spectators arriving from all parts of the world to watch. The tourism industry also wanted such transit during that influx of international spectators so that they could  travel around Mexico. The government also wanted to be able to showcase their modernized metropolis to the world with a shiny, brand-new subway network.<sup><a id="ref44" href="#foot44">44</a></sup></p>
            
            <p>While the ICA's solution did provide many benefits to various groups, the ICA also stood to profit itself. Since the ICA held a monopoly on all of Mexico City's public works, it was in the ICA's best interest to have a massive guaranteed public work to do and get paid for.<sup><a id="ref45" href="#foot45">45</a></sup></p>`,
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p2s2c',
            alignment: 'full',
            description: 'More subtly, the ICA and its French associates (which would later fund the Metro) already invested in real estate downtown, as well Ciudad Satélite ("Satellite City"), México, so it was even more financially beneficial to develop downtown with a metro system and improve congestion coming from suburbs like Ciudad Satélite.<sup><a id="ref46" href="#foot46">46</a></sup>',
            info: 'Ciudad Satélite',
            location: {
                center: [-99.19050, 19.45377],
                zoom: 11.21,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'satelite',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'satelite',
                    opacity: 0
                }
            ],
        },
        {
            id: 'p2s2d',
            alignment: 'full',
            description: 'The ICA\'s solution was a win-win-win: the public got better transit, the government looked good, and the ICA and its friends profited.',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'p2s3',
            alignment: 'full',
            title: 'Alternatives',
            description: `<p>There were other options to reduce congestion, though. Already mentioned was simply redesigning the bus network without the need to build a metro system, an idea which the ICA left out of its study. Also brought up was how big businesses demanded either better public transit or better housing; better housing was another alternative that could've gone hand in hand with a reformed zoning map, since zoning was another preidentified issue. Of course, none of these had a part for the ICA to play and profit off of.</p>

            <p>While Paz decried "North American-style government" earlier, Uruchurtu leaned into "the gringo model [see note] that the city was supposed to grow around automobiles."<sup><a id="ref47" href="#foot47">47</a></sup> Cars were becoming somewhat affordable as time went on, so this was also another option, albeit not perfect.</p>`,
            onChapterEnter: [],
            onChapterExit: [],
        },
		{
			id: 'p2s4',
			alignment: 'full',
            title: 'Research Question',
			description: `With the context, actors, and solutions out of the way, Díaz Ordaz and Uruchurtu will fight over whether or not to build the Metro. While it's clear in retrospect that Díaz Ordaz and his Metro won, what isn't clear is why. <strong>Was it for the good of Mexico City, or was it for the various financial and political stakes that both of them personally had in the Metro or lack thereof?</strong>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p3',
			alignment: 'center',
			description: '<p style="text-align: center; font-size: 48px; line-height: 1">Part III:<br>Uruchurtu vs. Díaz Ordaz</p>',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p3s1a',
			alignment: 'full',
            title: 'Uruchurtu and the Alianza',
			description: `<p>The first to step into the ring is Regent Uruchurtu. His reasons to oppose the Metro can be split into three groups: budget, social consequences, and his connection with the Alianza.</p>

            <p>Uruchurtu was right to worry about the cost of the Metro; as noted prior, the ICA's study's cost estimate was significantly under the true cost of the Metro. Even the underestimate was already high—MXP$2.4B (in March 2026 worth USD$2.2B), while the yearly budget was only MXP$1.4B (USD$1.3B)—given the number of geographic complications and novel techniques required to navigate them, on top of it already being the first metro system in the country.<sup><a id="ref48" href="#foot48">48</a></sup> These concerns were especially important to Uruchurtu, since he publicly boasted about having balanced the capital's budget, and did so even more once the French started offering to help, both by sending Parisian technicians who worked on the Metro there, and by lining up investors waiting to fund the project. Beyond the absolute cost of the proposal, he simply didn't find it necessary to spend any money at all on new forms of transit, when trams, buses (which, since they were private, didn't cost the city anything), and cars all already existed, and as mentioned before, he liked the idea of a car-centered city.<sup><a id="ref49" href="#foot49">49</a></sup></p>

            <p>While expenses were certainly a major issue, there are two parts to a budget, with the other being income. Income was another problem for Uruchurtu that came with the Metro for a subtler reason.</p>`,
			onChapterEnter: [],
			onChapterExit: [],
            location: {
                center: [-99.19050, 19.45377],
                zoom: 11.21,
                pitch: 0,
                bearing: 0
            },
		},
		{
			id: 'p3s1b',
			alignment: 'full',
			description: `Since one of the ICA's principles listed earlier were making sure suburban bus lines didn't have to go to the city center, and one of the results of the ICA's real estate ventures was Ciudad Satélite, it's no surprise that one of the first lines headed for Satélite, and nearly made it out of the Federal District's borders in 1970 (it was extended even closer in 1986, finally breaking through the border).<sup><a id="ref51" href="#foot51">51</a></sup> This posed a threat to Uruchurtu's income, because if people could live right outside his constituency's borders, and still use the (heavily subsidized) Metro to get to work in the city, they would be benefitted on his city's dime without paying it back in taxes.<sup><a id="ref52" href="#foot52">52</a></sup>`,
			onChapterEnter: [
                {
                    layer: 'distrito federal',
                    opacity: 0.25
                },
                {
                    layer: 'satelite',
                    opacity: 1
                },
                {
                    layer: 'tacuba',
                    opacity: 1
                },
                {
                    layer: 'metro 1969-1970',
                    opacity: 1
                },
                {
                    layer: 'metro 1969-1970 trans',
                    opacity: 0.25
                },
            ],
			onChapterExit: [
                {
                    layer: 'distrito federal',
                    opacity: 0
                },
                {
                    layer: 'satelite',
                    opacity: 0
                },
                {
                    layer: 'tacuba',
                    opacity: 0
                },
                {
                    layer: 'metro 1969-1970',
                    opacity: 0
                },
                {
                    layer: 'metro 1969-1970 trans',
                    opacity: 0
                },
            ],
            info: 'Orange area: Federal District<br>Light blue dot: Ciudad Satélite<br>Purple dot: Tacuba station<br>Colored lines: Metro (opaque is by 1970, translucent is after 1970)<sup><a id="ref50" href="#foot50">50</a></sup>',
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
		},
		{
			id: 'p3s1c',
			alignment: 'full',
			description: `<p>In regards to social consequences, Uruchurtu also warned that the middle-class would be priced out of their homes in the city center as a result of the development that followed the Metro.<sup><a id="ref53" href="#foot53">53</a></sup> This was also especially important to him because, after he noticed the growing discontent of the middle class, he worked to make them a part of his base of popular support.<sup><a id="ref54" href="#foot54">54</a></sup> Indeed, after the Metro was built, many workers ended up having to move to areas with rough terrain and illegal developments in the outskirts of the city.<sup><a id="ref55" href="#foot55">55</a></sup> In addition, while he was aligned with Paz in his concern for the rapid growth of Mexico City, Uruchurtu specifically placed some blame on poor and uneducated migrants, primarily of Indian heritage, settling permanently in the city; he thought that they should stay in rural areas and that the money that would be used on the Metro would be free to use to improve those rural areas.<p>
            
            <blockquote>What happened was that the growth of the city was blocked. Regent Uruchurtu hit the brakes and took the gringo model that the city was supposed to grow around automobiles, because the Metro seemed scary to him: "That's for the rats", he used to say. Of course he had a house in Los Angeles.<sup><a id="ref56" href="#foot56">56</a></sup> On one hand it encouraged the automobile, and on the other it totally stopped growth, under the argument that the city shouldn't grow but rather fill in its gaps. And those gaps existed, of course, but he didn't think that when there's a growing demographic the people are already thinking about buying here and buying there. Miguel Alemán's project with Mario Pani was carried out, precisely, to overcome the freezing of the edge of the city that Uruchurtu caused.</blockquote>
            
            <p style="text-align: right">Teodoro González de León"<sup><a id="ref57" href="#foot57">57</a></sup></p style="text-align: right">
            
            <p>This is an example of his specifically classist beliefs that led him to prefer cars, which weren't affordable, over the Metro. His classist, nationalist and xenophobic stances were popular among many of his middle-class constituents.<sup><a id="ref58" href="#foot58">58</a></sup></p>
            
            <p>He also had strong ties with the Alianza de Camioneros: he was friends with its 1954–1958 leader, he helped them and worked with them to improve bus transport within the city for many years, and they aligned completely with his affinity for small firms (which the Alianza supported) and extreme nationalism (the Alianza was Mexican, as opposed to a French-backed Metro).<sup><a id="ref59" href="#foot59">59</a></sup> The strength of their link can be seen in how Uruchurtu's fall from power led to the Alianza's fall as well.<sup><a id="ref60" href="#foot60">60</a></sup> The Alianza had a lot at stake in this fight. Most clearly, the Metro would take some riders away from buses, which would lower revenue. In addition, the expansion that the Metro would promote would force the Alianza to serve longer, less efficient routes. Those routes would  also exceed the boundaries of the monopoly that it only could hold in the Federal District; outside of those boundaries, the Alianza had competition and couldn't benefit from Uruchurtu's relationship with them, and Uruchurtu had no power to control them there either.<sup><a id="ref61" href="#foot61">61</a></sup></p>
            
            <p>Overall, Uruchurtu's balanced budget and nationalist ideologies, relationship with the Alianza, and growing dependence on the middle-class for support all left him with no choice but to vehemently oppose the Metro.</p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p3s2',
			alignment: 'full',
            title: 'Díaz Ordaz and the ICA',
			description: `<p>Then comes President Díaz Ordaz. Like how Uruchurtu's circle represented a coalition of anti-Metro forces, Díaz Ordaz was surrounded by pro-Metro forces: international industry, big tourism, and the ICA.</p>

            <p>Before Díaz Ordaz' presidency, Former President Miguel Alemán had already been term-limited out of office, but continued to fight for stabilized development and national industries by trying to convince his party and President López Mateos to appoint Antonio Ortíz Mena for president. This was closely aligned to Uruchurtu, and in fact, Alemán and Uruchurtu were high school friends. Alemán's pick, and therefore his faction of the party, was discarded in favor of Díaz Ordaz, who called for a break from protectionism and nationalism, and came out as the best candidate for the PRI to choose to advance the interests of international industrialists.<sup><a id="ref62" href="#foot62">62</a></sup> Díaz Ordaz had a big opportunity to advance the interests he was nominated for by making a deal with the French to take on the gargantuan task of building a Metro through the lake, for both their financing and technical expertise. This went at odds with Uruchurtu's nationalism, and directly defeated Uruchurtu's friend Alemán's nationalism as well.</p>

            <p>Díaz Ordaz was also heavily pressured to get the Metro done by 1968 by land developers and tourism promoters, following Mexico's aforementioned contract to host the 1968 Olympics.<sup><a id="ref63" href="#foot63">63</a></sup> There was also general national support for urban growth and development, which made the Metro politically popular.<sup><a id="ref64" href="#foot64">64</a></sup></p>

            <p>Most interestingly, Díaz Ordaz' wife was related to several founders of the ICA.<sup><a id="ref65" href="#foot65">65</a></sup> Since the ICA, as explained previously, had much to gain itself from the construction of the Metro, Díaz Ordaz' personal ties encouraged him further to support it.</p>

            <p>Overall, between the PRI, industrialists, developers, tourism promoters, and the ICA, Díaz Ordaz had no choice but to support the Metro.</p>
            `,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p3s3a',
			alignment: 'full',
            title: 'Uruchurtu vs. Díaz Ordaz',
			description: `<p>With the two figureheads set, the fight begins. Uruchurtu was able to successfully keep debate over the Metro at bay for the six years following the ICA's proposal, but not once Díaz Ordaz took office.</p>

            <p>Before Díaz Ordaz even took office, he already endorsed the Metro.<sup><a id="ref66" href="#foot66">66</a></sup> By January 1965, Díaz Ordaz antagonized Uruchurtu within banks, the Chambers of Deputies, and channels with journalists. As the year went by, he began releasing public statements explaining the necessity of the Metro for the Olympics. Then, he began specific attacks, like how "Uruchurtu [...] would be responsible for the role that Mexico would play in the Olympic Games." By August, he began working to distance Uruchurtu from as many of his political relationships as possible. By September, he started blaming Uruchurtu for everything: the rising cost of meat, urban poverty, transport delays, housing shortages, and even the failure of the national soccer team. Uruchurtu didn't budge however; he had held public support for a decade that would last for as long as he resisted the Metro.<sup><a id="ref67" href="#foot67">67</a></sup></p>

            <p>The longer Uruchurtu resisted, the worse it became for Díaz Ordaz. Every day was one less day before the Olympic deadline to satisfy the tourism industry and show the project off on the international stage. Every attack was also one more attack on the unity of the PRI, which was essential for the PRI to maintain its authority. If the PRI were to split, it would risk the absolute control it held over Mexico. Both Díaz Ordaz, as the PRI-nominated President, and Uruchurtu, as Former Secretary-General of the PRI, would stand to lose if the PRI were to collapse.<sup><a id="ref68" href="#foot68">68</a></sup> This is also why Díaz Ordaz couldn't just remove Uruchurtu, even though Uruchurtu was officially a part of the Cabinet.  Essentially, Díaz Ordaz had to turn Uruchurtu's own base against him—and quickly—or else he'd lose not only his project, but also his legitimacy as a president who was in charge of his cabinet, not the other way around.</p>

            <p>By November 1965, Díaz Ordaz made some visible progress. Opposition parties from both sides of Congress, who were against Uruchurtu, took advantage of the conflict to try to reestablish a municipal government in the capital. The measure failed to get enough support from the PRI, which held the vast majority of Congress, but the strength of the attempt showed Díaz Ordaz how far Uruchurtu antagonism could take him.<sup><a id="ref69" href="#foot69">69</a></sup></p>

            <p>While Díaz Ordaz' attacks had an effect, his rhetoric could only take him so far. What drove the nail into Uruchurtu's coffin wasn't Díaz Ordaz himself, but a much less likely force: bus drivers.</p>

            <p>In July 1965, bus drivers—primarily from radical groups independent from the Alianza—went on strike in protest of poor pay and conditions, as well as the Alianza's monopoly over the city's bus network. Various strikes of up to 1700 buses lasted through 1966, and the bus network that Uruchurtu prided himself in crafting devolved into chaos, along with its 8 million daily commutes into the city.<sup><a id="ref70" href="#foot70">70</a></sup> While the issues they were protesting were real, they were not new—this was just the first time that FTDF's Joaquin del Olmo did not halt the protests.<sup><a id="ref71" href="#foot71">71</a></sup> del Olmo usually had a lot of control; his control of the Alianza was the only way Uruchurtu was able to build relations with them in the first place.<sup><a id="ref72" href="#foot72">72</a></sup></p>

            <p>The order of events, all occurring immediately after one another, seems fishy:</p>
            <ol>
                <li>Díaz Ordaz needs something to turn public opinion against Uruchurtu, preferably about transit</li>
                <li>del Olmo suddenly lost control, sending Uruchurtu's city's bus network into chaos</li>
                <li>The FTDF became the first part of government outside of Congress to call for Uruchurtu's dismissal</li>
                <li>Díaz Ordaz nominated, and therefore effectively appointed, del Olmo as a federal deputy</li>
            </ol>
            <p>This timeline suggests that Díaz Ordaz and/or his regime allowed the bus strikes so that they could be used to topple Uruchurtu.<sup><a id="ref73" href="#foot73">73</a></sup></p>
            
            <p>Díaz Ordaz and the PRI definitely didn't just fabricate the strikes, since they originated in independent groups unaffiliated with the PRI, and del Olmo had already had it out for the Alianza and its monopoly before the Metro debate.<sup><a id="ref74" href="#foot74">74</a></sup> It's also possible that unions were aware of the conflict between Díaz Ordaz and Uruchurtu and simply saw the conflict as an opportunity to go on strike without being crushed by the government.<sup><a id="ref75" href="#foot75">75</a></sup> However, there was likely at least some level of foul play involved.</p>

            <p>Regardless of how they came to be, the strikes were successful. The first bus lines to suffer from the economic repercussions of the strikes were the smaller ones, and so they took it out on the Alianza by coming out publicly in support of the Metro. The Metro would hurt the big lines more anyway (and even potentially help the small ones that could act as feeders to it), so they had little to lose in doing so.<sup><a id="ref76" href="#foot76">76</a></sup> Uruchurtu's anti-Metro argument to the public lay largely in the bus network already being good enough and making a Metro unnecessary, so parts of that bus network itself saying that there should be a Metro undermined any legitimacy Uruchurtu's anti-Metro stance had.</p>
            `,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p3s3b',
			alignment: 'full',
			description: `With his city in chaos, Uruchurtu lost many supporters, both in the Alianza, which was falling apart due to infighting, and in the middle-class workers, who couldn't get to work with so many strikes. Uruchurtu made last-minute attempts to salvage his image by announcing new minibus networks, but to no avail; everyone wanted the Metro.<sup><a id="ref77" href="#foot77">77</a></sup> With Uruchurtu's coalition against him, all it took was one wrong move, which came on September 12th, 1966, when Uruchurtu's administration cleared a squatter settlement in Colonia Santa Úrsula. The move provoked unanimous outrage in the Chamber of Deputies, and they, supported by Díaz Ordaz, called for Uruchurtu's resignation (and some spectators for his death) by the following day.<sup><a id="ref78" href="#foot78">78</a></sup>`,
            info: 'Colonia Santa Úrsula, replaced by Estadio Azteca',
            location: {
                center: [-99.14746, 19.30737],
                zoom: 13.73,
                pitch: 0,
                bearing: 0
            },
			onChapterEnter: [
                {
                    layer: 'santa ursula',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'santa ursula',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p3s3c',
			alignment: 'full',
			description: `
            <img src="https://economicon.mx/ec0n0/wp-content/uploads/2018/02/ernesto-uruchurtu-diaz-ordaz-mediateca-inah-1965.jpg" style="float: left; padding: 10px; width: 30vw;"></img>
            <blockquote>Respected Mr. President and distinguished friend:
            <br><br>
            I've had the honor of being appointed by you, the first of December of 1964, Head of the Department of the Federal District, an honor also bestowed upon me by Mr. President of the Republic Sir Adolfo Ruiz Cortines y Mr. President of the Republic Sir Adolfo López Mateos, in their respective terms of government.
            <br><br>
            I have put always, in the fulfillment of this honored and important role, all of my work capacity, my good faith and a sustained drive to serve my countries,
            for my co-citizens and for the Government of the Republic.
            <br><br>
            Notwithstanding, for the reasons that you permitted me to tell you verbally,
            I have decided to present, which I do through means of this letter, my renunciation of the aforementioned role of Head of the Department of the Federal District.
            <br><br>
            In doing so, I would like to reiterate to you my thanks for the confidence you have demonstrated in me and the decided support that you have given me in the fulfillment of my duties, as well as the testimony of my personal friendship and of my respected esteem.
            <br><br>
            For you, at much attention, Licensed Ernesto P. Uruchurtu.<sup><a id="ref79" href="#foot79">79</a></sup>
            </blockquote>
            
            <p>Despite the immense tension and infighting occurring within the PRI, the formality and deference that Uruchurtu shows with this letter shows how, in the end, he and others valued public perceptions of PRI unity above all else, even when he was being booted out of office.</p>

            <p>Following Uruchurtu's resignation, it took less than a month for Díaz Ordaz to appoint the Federal District's next regent, Alfonso Corona del Rosal, and for him to formally approve the ICA's Metro plan.<sup><a id="ref80" href="#foot80">80</a></sup></p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p3s4',
			alignment: 'full',
            title: 'Self-Interest or Public Good?',
			description: `<p>One thing is certain: Uruchurtu and Díaz Ordaz were both motivated by special connections they had with different groups of powerful people. Uruchurtu's balanced budget and nationalist ideologies, relationship with the Alianza, and growing dependence on the middle-class for support all left him with no choice but to vehemently oppose the Metro. Between the PRI, industrialists, developers, tourism promoters, and the ICA, Díaz Ordaz had no choice either but to support the Metro.</p>

            <p>While retrospect can't be had to see whether Uruchurtu was right or not yet before the struggle that's yet to come in the next half of this narrative, he did truly stick to his ideologies until the very end. Even when he realized he had to save face, he didn't give in to the push for the Metro. Díaz Ordaz swayed public opinion away from Uruchurtu essentially by sabotaging his own nation's capital, and when Congress pushed him to resign, they didn't even mention the Metro or the bus strikes at that point either. For this reason, it's also difficult to tell whether the cited sources' claim that the bus strikes were truly the nail in the coffin is completely accurate.</p>

            <p>While Díaz Ordaz' means were problematic, that can't be used to automatically judge his motives. He too did all he could for his international industrialist ideology, and succeeded. Though the Metro wasn't ready in time for them, the 1968 Olympics were a solid reason to build a Metro, and many other cities followed.<sup><a id="ref81" href="#foot81">81</a></sup> The only major flaw in his motives is the ICA. While it is problematic that he was family with some ICA founders, what's worse are the motives that the ICA itself had. While they did indeed align with his international ambitions by working with the French, speculating in land, getting the government to develop that land, and being the only company that can develop it, is too many levels of profit. Their plan looks good in their study, but their study had flaws, they stood to benefit significantly from the results of their own study, and the government didn't consider any study regarding the Metro that wasn't by the ICA or its partners. So, the primary issue was that Díaz Ordaz blindly accepted the ICA's proposal which, though aligned with what he wanted, wasn't necessarily the best option for new public transit.</p>

            <p><strong>Overall, both Díaz Ordaz and Uruchurtu were forced by a mix of their beliefs and their need to stay in power to stick to their positions, and they both stayed true to those positions, even if it cost them their job in the end.</strong></p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4',
			alignment: 'center',
			description: '<p style="text-align: center; font-size: 48px">Part IV: Full Steam Ahead</p>',
            eval: 'showSkip("p4s3")',
			onChapterEnter: [],
			onChapterExit: [],
            location: {
                center: [-99.14746, 19.30737],
                zoom: 13.73,
                pitch: 0,
                bearing: 0
            },
		},
		{
			id: 'p4s1a',
			alignment: 'full',
            title: 'Technical Difficulties',
			description: `With Uruchurtu out of the way, the project was ready to become what was called the largest public works project in Federal District history. Its MXP$2.4B (in March 2026 worth USD$2.0B) price tag was eaten mostly by loans from both Mexican and French banks.<sup><a id="ref82" href="#foot82">82</a></sup> In April 1967, Díaz Ordaz and his cabinet signed his decree to establish the Sistema de Transporte Collectivo (Public Transit System), or STC.<sup><a id="ref83" href="#foot83">83</a></sup> It created it as a "decentralized public organ", meaning that it wasn't a part of the government itself, but rather a company the government owned, a model which originated in 1947 to rein in the disjoined chaos that was the post-war industrialization boom.<sup><a id="ref84" href="#foot84">84</a></sup> It called for service both underground and aboveground, and had it run by the Federal District, but made sure a lot of different parts of the government were involved, and overall it was a very detailed and well thought-out plan. The STC was required by the bylaws set out in the decree to allocate at least 80% of its excess proceeds to further expansion, theoretically ensuring its unrelenting future expansion.<sup><a id="ref85" href="#foot85">85</a></sup>`,
			onChapterEnter: [
                {
                    layer: 'subsidence',
                    opacity: 0
                }          
            ],
			onChapterExit: [],
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
		},
		{
			id: 'p4s1b',
			alignment: 'full',
			description: `In addition to the numerous loans required, the French helped out with their expertise. The two primary companies were the Societé Generale de Traction et d'Explotation de Paris (General Traction and Operations Association of Paris), and the Societé Française d'Etudes de Realisations de Transports Urbains (French Society for Studies and Implementation of Urban Transport), or SoFreTu.<sup><a id="ref87" href="#foot87">87</a></sup> Mexico could get all the help they could get, since on top of building the first Metro in the country already being a monumental feat, especially given the amount of people it had to serve, there were many geographic issues. Soil was up to 80% water in some areas, leading to three challenges.<sup><a id="ref88" href="#foot88">88</a></sup>`,
            info: `Redder areas are sinking faster.<sup><a id="ref86" href="#foot86">86</a></sup>`,
			onChapterEnter: [
                {
                    layer: 'subsidence',
                    opacity: 1
                }                
            ],
			onChapterExit: [],
		},
		{
			id: 'p4s1c',
			alignment: 'full',
            image: 'https://ca-times.brightspotcdn.com/dims4/default/e437154/2147483647/strip/true/crop/2048x1152+0+0/resize/1440x810!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fea%2F4b%2Faaede5c816833908a8af8c7d915d%2Fla-1985-mexico-earthquake-20170919-012',
			description: `First, they had to build the Metro to withstand earthquakes. The capital is relatively near several fault lines, and it's much easier for earthquakes to shake water versus solid soil (liquefaction).<sup><a id="ref89" href="#foot89">89</a></sup> This image of the 1985 earthquake shows the damage the Metro had to be built to resist.`,
            info: `Redder areas are sinking faster.<sup><a id="ref86" href="#foot86">86</a></sup>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s1d',
			alignment: 'full',
            image: 'metroconstructionbuildingweight.png',
			description: `Second, they had to prevent the Metro from floating up to the surface. While that sounds impossible, the fluid soil wasn't able to keep the Metro in place alone, and hollowed out stations and tunnels had an average density lower than water, causing them to float. To solve this, the ICA built buildings on top of the Metro for the sole purpose of keeping it in place.<sup><a id="ref90" href="#foot90">90</a></sup>`,
            info: `Redder areas are sinking faster.<sup><a id="ref86" href="#foot86">86</a></sup>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s1e',
			alignment: 'full',
            image: 'https://media.wired.com/photos/660f246e6ee140a5648de193/master/w_1600,c_limit/b.jpg',
			description: `Third, they had to prevent the Metro from sinking. That sounds even less possible, since if they had to make sure it wouldn't float, how would they have a problem with it sinking? However, at the same time that the Metro would rise to the surface of the soil, water was being extracted from the soil due to a water crisis, and the Spanish draining of the lakebed centuries prior made the soil vulnerable to weird, uneven compression. So, parts of the soil are sinking by more than 14"/year. Worse, each tiny part of the city is sinking at different rates, meaning the Metro had to essentially bend over time, as seen in the image.<sup><a id="ref91" href="#foot91">91</a></sup>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s2',
			alignment: 'full',
            image: "vintagemetro.jpg",
            title: "The Metro's Inauguration",
			description: `<p>Despite the numerous dangers that Mexico City itself posed to the project, workers broke ground on June 17th, 1967, and the first section was inaugurated by Díaz Ordaz on September 4th, 1969.<sup><a id="ref92" href="#foot92">92</a></sup> It was an internationally recognized event, with international transportation officials like the chair of the Metropolitan Transportation Authority of New York and many others in attendance. At the time, the Metro was estimated to garner a ridership of 1.7M passengers/day by the end of 1970, when the first three lines would have been finished.<sup><a id="ref93" href="#foot93">93</a></sup></p>

            <p>Evidently, Uruchurtu's resistance prevented it from being completed by the 1968 Olympics, but it was an impressive feat to get it done so quickly nonetheless. It ended up being one of the fastest and most cost-efficient metro systems ever built.<sup><a id="ref94" href="#foot94">94</a></sup> Construction surpassed 0.6mi/month, a rate unparalleled anywhere else in the world, with the help of 48,000 workers, 4,000 technicians, 4,000 specialists (many French), and 3,000 administrators.<sup><a id="ref95" href="#foot95">95</a></sup> Once Díaz Ordaz prevailed, he and his control over the one-party government gave him full reign to push the Metro to completion as quickly as possible, without anyone to present significant opposition. In fact, the time from proposal to groundbreaking (nine years) was much longer than groundbreaking to inauguration (only two years).</p>

            <p>The haste with which the Metro was built didn't compromise the result, either. The image above was taken in the same year as its inauguration. Arbon Jack Lowe praised it (even comparing it to New York, the most iconic metro system in the world) for its elegance, modernity, technological advancedness and automatic train control, capacity, cheap price, and geological obstacles it had to overcome:</p>
            <details>
            <summary>Click to see Lowe's full description</summary>
            <blockquote>
                The elegant stations have walls and floors of gray marble and are a blend of ancient and modern design. 
                <br><br>
                The sparkling new, bright orange cars hold 170 passengers each, sitting and standing, and have pneumatic tires that travel on shining steel rails, making for a smooth, almost silent, ride. As trains pull into the stations, electronically operated gates close automatically to avoid a scramble of late-arriving passengers.
                <br><br>
                The trains, six cars long, run at approximately four-minute intervals from 5:30 a.m. to l a.m., and the fare is 1.20 pesos-about ten cents. As the demand for service increases, the system will be able to handle nine-car trains operating at intervals as short as ninety seconds.
                <br><br>
                The trains run on electric power and operations are directed from a computerized control center, whose electronic and visual control systems give immediate access to information on positions of trains, their speed, and even the pressure of their tires. Automatically operated computers perform routine tasks, freeing traffic control personnel to concentrate on matters requiring individual judgment. Constant contact between the control center and all stations, train operators, and maintenance personnel is achieved by means of a complex telecommunications network.
                <br><br>
                Mexico City's Metro is the highest underground transit system in the world ~7,350 feet above sea level. Its construction, a result of close cooperation between Mexico, and France, at first posed seemingly insurmountable obstacles that took the designers seven years to overcome. Mexico City's foundation is an ancient lake bed of soft clays and water, and the city sinks several centimeters every year. Recurrent earthquakes add to the difficulties of underground construction. Engineers opted against the use of the traditional tunnel system in favor of "ducts"-flexible underground reinforced concrete structures built in open excavations at a minimum depth of seven yards. The tracks are to be releveled periodically as the city subsides.
                <br><br>
                [...]
                <br><br>
                Thus Mexico City has joined the ranks of such Hemisphere cities as Buenos Aires, Boston, Chicago, Montreal, New York City, Philadelphia, and Toronto, all of which have subway systems. Construction is under way or plans are being made for other systems in Caracas, Venezuela; Guadalajara, Mexico; San Francisco, California; Santiago, Chile; Sao Paulo, Brazil; and Washington, D.C.
            </blockquote>
            </details>
            <p style="text-align: right">Arbon Jack Lowe, "Mexico's Metro", <i>Américas</i> Magazine<sup><a id="ref96" href="#foot96">96</a></sup></p style="text-align: right">
            
            <p>Unfortunately, this success was short-lived.</p>`,

			onChapterEnter: [
                {
                    layer: 'subsidence',
                    opacity: 0
                }
            ],
			onChapterExit: [],
		},
		{
			id: 'p4s3',
            eval: 'hideSkip()',
            title: 'Economic Collapse',
			alignment: 'full',
			description: `<iframe src="https://data.worldbank.org/share/widget?end=1983&indicators=FP.CPI.TOTL.ZG&locations=MX&start=1965" width='600' height='400' frameBorder='0'></iframe><sup><a id="ref97" href="#foot97">97</a></sup>
            
            <p>While the Metro looked like it had a sunny future, those dreams were clouded by the economic conditions that plagued Mexico in the years that followed. Mexico ran into an inflationary crisis in the 1970s, right as President Echeverría took his term from 1970–1976<sup><a id="ref98" href="#foot98">98</a></sup>. In 1970, inflation was 5%, not too far from his predecessor's 3–4%, but by 1974, it hit 24%.<sup><a id="ref99" href="#foot99">99</a></sup> Over the same period, annual real GDP growth was only 4–7%.<sup><a id="ref100" href="#foot100">100</a></sup></p>

            <p>This crisis was not new. Much of Latin America already had a lot of experience with hyperinflation and coups and mass foreign investment. Echeverría basically inherited decades worth of that tension building under the surface. It was able to stay under the surface because the Mexican Revolution already wiped out the landowning oligarchy that was blamed for economic inequality. So, the tension didn't show itself on a grand scale until 1968's Tlatelolco Massacre, which Echeverría played a major role in as Díaz Ordaz' Secretary of State, which became the first warning sign of the crisis to come.<sup><a id="ref101" href="#foot101">101</a></sup></p>

            <p>Echeverría's economic policies in response were threefold: subsidies and nationalization, and urban growth.</p>

            <p>To calm the rising pressure from the public, Echeverría tripled government subsidies over his six year term. These subsidies mainly went to trains (the long-distance freight kind, not the Metro), expansion of the oil industry, staple food stores for the public to buy their essentials, energy bills, and most of all, rural farmers and their agricultural exports. He was especially concerned with exports because he placed a lot of importance on the balance of trade, and rapid industrialization required massive financial inflows, which he tried to balance with current account inflows by exporting more.<sup><a id="ref102" href="#foot102">102</a></sup> He went on an international tour desperately trying to find countries to export to.<sup><a id="ref103" href="#foot103">103</a></sup> The government deficit continued to grow, but Echeverría didn't budge with these programs, considering them essential.<sup><a id="ref104" href="#foot104">104</a></sup> He also did put some limited investment into roads and buses. He did not, however, put much more money into the Metro.<sup><a id="ref105" href="#foot105">105</a></sup></p>

            <p>Also related to the balance of trade, was nationalization. While his predecessor was the champion of international industrialists, he was the opposite, since he figured they were a waste of money that would better be used on Mexican companies.<sup><a id="ref106" href="#foot106">106</a></sup> Just like Uruchurtu, this ideology lent itself to opposition to the Metro, since the French played a big part in it. He brought up the Metro only twice in his six Informes de Gobierno (Government Report), once to brag about the inauguration of the Metro that happened before he even took office, and once to announce his one investment into the Metro, which was subway cars:<sup><a id="ref107" href="#foot107">107</a></sup></p>

            <details>
            <summary>See two excerpts of his Informes</summary>
            <img src="assets/echeverria.png" style="align: center; padding: 10px; width: 50vw;"></img>
            
            <blockquote>CONASUPO [Compañía Nacional de Subsistencias Populares, or the National Company of Popular Subsistence] installed 40 more stores in the Federal District last August. The third line of the "metro" was inaugurated in November. It transports close to a million people per day. Its coordination with the functioning of the buses, trams and trolleys to find comprehensive solutions to the problem of urban commutes is being cautiously studied. With the goal of decongesting traffic in the city center and of reducing the emission of toxic gases, the building of four long-distance transport terminals was arranged in the periphery of the capital, starting right away with the construction of the one corresponding to the northern zone. The investment program in the Federal District Department amounts to 2 thousand 572 million [2.572 billion] pesos.<sup><a id="ref108" href="#foot108">108</a></sup> If to that we add 1447 [1.447 billion] which represents the public works undertaken in other public works in this city and the 2 thousand 369 million [2.369 billion] to which amount the other public works which, while not located physically in the District they will still benefit its residents directly, we can measure the magnitude of the effort that comes to a head to attend to its necessities.<sup><a id="ref109" href="#foot109">109</a></sup></blockquote>

            <p style="text-align: right">Luís Echeverría Alvarez, <i>Primer Informe de Gobierno</i><sup><a id="ref110" href="#foot110">110</a></sup></p style="text-align: right">

            <blockquote>
                When the necessity to increase the number of cars of the "Metro" arose, we arranged that they be constructed in the country. Various groups of specialists maintained, then, that the national industry wasn't prepared yet to undertake that job. After completing more precise studies it became clear that these cars could be manufactured in Mexico with a 50 percent national integration. This fact constitutes a symbol of our industrial progress and a decisive step on the journey of our technological independence. They are building it in the Industrial Complex of Sahagún City, which honors Mexican technicians and workers. 
                <br><br>
                Strong international forces, related with the credits and with the purchase of technology, put great pressures a few months ago, or they thought they were great pressures, as many who think they do or pretend to, so that the cars would be imported entirely from France. Even here, some in good faith thought that the cars would arrive earlier, and thus would allow the Metro to serve a great number of users quicker. This is the dilemma of national industry, the public and private: it continues in one form or another subjected to international pressures and recommendations, or we decide, notwithstanding that there be a great number of problems initially that we have always overcome, to march along a path with a greater degree of independence, like in these examples that I have put forth to you of the Metro cars, which certainly we will take a few months later to put into service this coming year, relative to the date of when they would enter into service in the case that they be imported completely, but that according to what we expect from our technicians and workers, it will be that although it will be a few months later, but making work in Mexico, employing our raw materials, our electricity, our water, our transport and above all, our enthusiasm and our optimism, and our decided attitude to be independent. That they enter, I say, a few months later, but which ultimately represented one of many testimonials of the effort that we make these days for our national progress in autonomy.
            </blockquote>

            <p style="text-align: right">Luis Echeverría Álvarez, <i>Cuarto Informe de Gobierno</i><sup><a id="ref111" href="#foot111">111</a></sup></p style="text-align: right">
            </details>

            <p>First, the fact that these two excerpts are the only times he mentioned the Metro, which was so heavily fought for by his predecessor and nominator for the job, shows how low of a priority it was to him. He doesn't even mention the part that was inaugurated in 1972 during his term.<sup><a id="ref112" href="#foot112">112</a></sup> In the first excerpt, he spends only three sentences on it, the latter of which he uses to pivot to other modes of transport. While he touts large numbers of pesos invested in the Federal District, he had very little to do with it given how little time he had been holding the presidency up to this point, and they didn't go to support the Metro, but rather the other projects both mentioned earlier as well as in the first excerpt.</p>

            <p>Then, the second excerpt was his announcement that he would be making more Metro cars, but this time, truly Mexican ones. By his own admission throughout the scattered attacks on international forces, Mexican cars would take longer to produce than if he had just bought more from France, with no savings as a result. The only incentive that he had was adding more Mexican jobs and "our decided attitude to be independent." Regarding the jobs, it should be noted that the unemployment rate was 3.8% nationwide and 2.5% in Hidalgo (the state with Ciudad Sahagún, where they were building the cars for the Metro) in 1970 and 3.0% nationwide and 2.9% in Hidalgo and in 1980, suggesting neither Mexico nor Ciudad Sahagún was facing an unemployment crisis.<sup><a id="ref113" href="#foot113">113</a></sup></p>

            <p>Also similar to Uruchurtu, he wanted to limit urban growth, which can be seen in his support for rural farmers (like Uruchurtu) and opposition to the Metro (again, like Uruchurtu).<sup><a id="ref114" href="#foot114">114</a></sup></p>

            <p>Mexico City Regent Sentíes, nominated by Echeverría, actually declared that "the era of sumptuous and unnecessary works" like Metro expansion would be halted, in favor of actual "social benefits".<sup><a id="ref115" href="#foot115">115</a></sup> This represented the most clear cut stance Echeverría's administration officially and publicly gave.</p>

            <p>While the STC's bylaws—elaborated on above—did require that 80% of its profit be reinvested into itself in the hopes that this would fund expansion, maintenance costs ate up the little revenue it had, since a Metro designed to transport the working- and lower-classes had to charge low fares for anyone to afford it.</p>

            <p>Now, what impact will Echeverría's neglect for the Metro have?</p>
            `,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s4a',
			alignment: 'full',
            title: 'Metro Collapse',
			description: `Echeverría's impact on the expansion of the Metro can be seen in the stark contrast in Metro expansions before and after his inauguration. First, here's what Arbon Jack Lowe already projected in 1969 that would be done in the years following the first set of inaugurations:<sup><a id="ref116" href="#foot116">116</a></sup>`,
			onChapterEnter: [
                {
                    layer: 'metro lowe',
                    opacity: 0
                },
                {
                    layer: 'metro lowe trans',
                    opacity: 0
                }
            ],
			onChapterExit: [],
		},
		{
			id: 'p4s4b',
			alignment: 'full',
			hidden: true,
            info: 'Lowe\'s Projections for the Metro (opaque lines are what he projected, translucent lines are what he didn\'t)',
			onChapterEnter: [
                {
                    layer: 'metro lowe',
                    opacity: 1
                },
                {
                    layer: 'metro lowe trans',
                    opacity: 0.25
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro lowe',
                    opacity: 0
                },
                {
                    layer: 'metro lowe trans',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4c',
			alignment: 'full',
			description: `Now, here's what happened from the first inauguration through the end of Echeverrías' term:`,
			onChapterEnter: [
                {
                    layer: 'metro 1969',
                    opacity: 0
                },
                {
                    layer: 'metro 1969 trans',
                    opacity: 0
                }
            ],
			onChapterExit: [],
		},
		{
			id: 'p4s4d',
			alignment: 'full',
			hidden: true,
            info: '1969: 13km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick opaque in 1969, thin translucent after 1969).',
			onChapterEnter: [
                {
                    layer: 'metro 1969',
                    opacity: 1
                },
                {
                    layer: 'metro 1969 trans',
                    opacity: 0.25
                },
                {
                    layer: 'metro 1970',
                    opacity: 0
                },
                {
                    layer: 'metro 1970 trans',
                    opacity: 0
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1969',
                    opacity: 0
                },
                {
                    layer: 'metro 1969 trans',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4e',
			alignment: 'full',
			hidden: true,
            info: '1970: 27km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1970, thick opaque in 1970, thin translucent after 1970).',
			onChapterEnter: [
                {
                    layer: 'metro 1970',
                    opacity: 1
                },
                {
                    layer: 'metro 1970 trans',
                    opacity: 0.25
                }
            ],
			onChapterExit: [],
		},
		{
			id: 'p4s4f',
			alignment: 'full',
			description: `At this point, Echeverría is recently inaugurated.`,
            info: '1971: 0km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1971, thin translucent after 1971).',
			onChapterEnter: [
                {
                    layer: 'metro 1972',
                    opacity: 0
                },
                {
                    layer: 'metro 1972 trans',
                    opacity: 0
                },
            ],
			onChapterExit: [
                {
                    layer: 'metro 1970',
                    opacity: 0
                },
                {
                    layer: 'metro 1970 trans',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4g',
			alignment: 'full',
			hidden: true,
            info: '1972: 2km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1969, thick opaque in 1972, thin translucent after 1972).',
			onChapterEnter: [
                {
                    layer: 'metro 1972',
                    opacity: 1
                },
                {
                    layer: 'metro 1972 trans',
                    opacity: 0.25
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1972',
                    opacity: 0.25
                },
            ],
		},
		{
			id: 'p4s4h',
			alignment: 'full',
			hidden: true,
            info: '1973: 0km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1973, thin translucent after 1973).',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s4i',
			alignment: 'full',
			hidden: true,
            info: '1974: 0km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1974, thin translucent after 1974).',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s4j',
			alignment: 'full',
			hidden: true,
            info: '1975: 0km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1975, thin translucent after 1975).',
			onChapterEnter: [
                {
                    layer: 'metro 1972',
                    opacity: 0.25
                },
                {
                    layer: 'metro 1972 trans',
                    opacity: 0.25
                }
            ],
			onChapterExit: [],
		},
		{
			id: 'p4s4k',
			alignment: 'full',
			hidden: true,
            info: '1976: 0km added<sup><a id="ref117" href="#foot117">117</a></sup><br>Colored lines represent Metro lines (thick translucent before 1976, thin translucent after 1976).',
			onChapterEnter: [],
			onChapterExit: [
                {
                    layer: 'metro 1972',
                    opacity: 0
                },
                {
                    layer: 'metro 1972 trans',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4l',
			alignment: 'full',
			description: `As expected, Echeverría's lack of funding for the Metro killed all expansion progress for the time being. The biggest issue that comes with this is that while the Metro stopped expanding, Mexico City didn't. First, there's the continued population boom. In addition, expansion of the city towards the periphery is partly what sparked the Metro to begin with. Now that the Metro priced out the middle-class from the city, the periphery grew even more, requiring more of a Metro.<sup><a id="ref118" href="#foot118">118</a></sup> Further, as he alluded to in the excerpt of his first Informe, he worked on revamping buses such that they would become feeders for the Metro.<sup><a id="ref119" href="#foot119">119</a></sup> This actually worsened one of the problems the ICA noted with the pre-Metro system nearly 2 decades before: that commutes from two suburbs were being forcibly rerouted in the bottleneck that was the city center.<sup><a id="ref120" href="#foot120">120</a></sup> For those reasons, Echeverría's decision to halt Metro expansion was a direct cause of the oversaturation of the Metro system.<sup><a id="ref121" href="#foot121">121</a></sup> To illustrate this, here's the same timeline of the Metro as above, but now with thickness representing annual ridership:`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s4m',
			alignment: 'full',
			hidden: true,
            info: '1969: 28 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1969 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1969 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4n',
			alignment: 'full',
			hidden: true,
            info: '1970: 142 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1970 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1970 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4o',
			alignment: 'full',
			description: `At this point, Echeverría is recently inaugurated. Also at this point, for reference, lines 1 and 2 surpass the passenger density of 2025 NYC's line 6, the line with the highest ridership in the system.<sup><a id="ref123" href="#foot123">123</a></sup>`,
            info: '1971: 329 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1971 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1971 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4p',
			alignment: 'full',
			hidden: true,
            info: '1972: 389 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1972 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1972 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4q',
			alignment: 'full',
			hidden: true,
            info: '1973: 437 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1973 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1973 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4r',
			alignment: 'full',
			hidden: true,
            info: '1974: 492 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1974 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1974 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4s',
			alignment: 'full',
			hidden: true,
            info: '1975: 28 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1975 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1975 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4t',
			alignment: 'full',
			hidden: true,
            info: '1976: 28 million total rides / year<sup><a id="ref122" href="#foot122">122</a></sup>. Each pixel of width represents roughly 1 million rides / year / km of track.',
			onChapterEnter: [
                {
                    layer: 'metro 1976 ridership',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'metro 1976 ridership',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4u',
			alignment: 'full',
			description: `<p>As these lines kept taking on higher ridership, every year that they didn't expand was a year of them getting consistently more packed up to dangerous levels.</p>

            <p>The Metro began to deteriorate at the same time, and it wasn't a coincidence. First, funding was a big issue: 53% of canceled trips were caused by technical failures, of which many were due to tracks deteriorating without maintenance, and 34% by insufficient labor.<sup><a id="ref124" href="#foot124">124</a></sup> Both problems were preventable with more money. On top, overcrowding was the other issue: passenger disruptions made up the remaining 13% of canceled trips.<sup><a id="ref125" href="#foot125">125</a></sup> This makes sense given that unfortunately, claustrophobic passengers would panic and cause physical injuries, and sexual assault was rampant in such close quarters. Trains were even so packed that they would lose power.<sup><a id="ref126" href="#foot126">126</a></sup> Of course, all of these things caused delays, and those delays would force even more people to pack into the next train, causing cascading failure.</p>

            <p>The Metro's riders couldn't help balance out loads by avoiding the crowded Metro either. 90% of riders had no choice but to use it, seeing as half made less than the minimum wage, and therefore relied on the MXP$1 (in March 2026 worth USD$0.45) to fit their commute in their budget.<sup><a id="ref127" href="#foot127">127</a></sup> Office workers, manual laborers, and students, which all likely worked 9–5 or similar and therefore commuted at the same time, made up 68% of riders.<sup><a id="ref128" href="#foot128">128</a></sup> So, all of them packed themselves into the little Metro that there was to try and make it to work on time.</p>`,
            location: {
                center: [-99.14072, 19.42577],
                zoom: 9.19,
                pitch: 0,
                bearing: 0
            },
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p4s4v',
			alignment: 'full',
			description: `While all of these issues were extremely concerning, 1975 brought far worse. On October 20th, 1975, 26 were killed and 69 injured as a train rammed into the back of another at Viaducto station on Line 2. The crash was deemed human error, and the driver was sentenced to 14 years in prison and a MXP$13M (in March 2026 worth USD$6.26M) fine.<sup><a id="ref129" href="#foot129">129</a></sup>`,
            info: 'Viaducto station',
            location: {
                center: [-99.13690, 19.40092],
                zoom: 15.70,
                pitch: 0,
                bearing: 0
            },
			onChapterEnter: [
                {
                    layer: 'viaducto',
                    opacity: 1
                }
            ],
			onChapterExit: [
                {
                    layer: 'viaducto',
                    opacity: 0
                }
            ],
		},
		{
			id: 'p4s4w',
			alignment: 'full',
			description: `Why did the Metro turn into such a problem so quickly? <strong>Did Echeverría focus too much on maintaining power? Was he too dead-set on his ideology? Or was it an inevitable result of economic downturn?</strong>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p5',
			alignment: 'center',
			description: '<p style="text-align: center; font-size: 48px; line-height: 1">Part V:<br>Echeverría-Era Freeze</p>',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p5s1',
			alignment: 'full',
            title: 'Economic Slump Theory',
			description: `<p>There are three theories to keep in mind before jumping straight to Echeverría's intentions. The first of them is the theory that Echeverría did what he could for his country, but that he got unlucky with the timing with the inflation crisis and something had to give.</p>

            <p>This theory relies on Echeverría simply being the unlucky president that was on the receiving end of decades of overspending, growing inequality, and the resulting tension that blew up in his face. If it were entirely Echeverría's fault, it would be expected that inflation would have slowed when he left, but instead it continued on through two more presidents' terms.</p>

            <p>While Echeverría did spend a lot of money on subsidies that didn't go to the Metro, he was spending them on genuinely important programs, like making sure that the lower-class was able to buy staple foods. His purchase of additional rolling stock when it wasn't necessarily the most pressing issue to the Metro can be explained by his belief that economic growth was slowing too much, since small, precisely timed government expenditures would help grow the economy without spiraling inflation further.<sup><a id="ref130" href="#foot130">130</a></sup></p>

            <p>From this viewpoint, Echeverría did nothing wrong.</p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p5s2',
			alignment: 'full',
            title: 'Echeverrían Freeze Theory',
			description: `<p>The next theory is named after what several historians have called the period: "congelamiento", which translates to "freeze", of the Metro expansion.<sup><a id="ref131" href="#foot131">131</a></sup> It's possible that Echeverría just didn't like the Metro, just like Uruchurtu. There are several potential reasons for this.</p>

            <p>First, as previously mentioned, are the various ways Echeverría was ideologically aligned with Uruchurtu, and thus aligned against the Metro: his nationalism and his opposition to urban growth. Both of these had solid backing, given how his predecessors spent so much money in a way that significantly benefitted France, and how urban growth has been a common theme throughout this narrative as a serious problem.</p>

            <p>At the same time, there are some more suspicious reasons. Echeverría's chosen regent, Sentíes, had a conflict of interest in being the Alianza's corporate lawyer, giving him even more direct ties to the Alianza than Uruchurtu had, and therefore even more a reason to help out buses but not the Metro.<sup><a id="ref132" href="#foot132">132</a></sup></p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p5s3',
			alignment: 'full',
            title: 'False Flag Theory',
			description: `<p>Last, and in fact least credible, is the theory that the Viaducto crash was staged by workers who wanted to force Echeverría to pay attention to the Metro and get automatic train control installed.<sup><a id="ref133" href="#foot133">133</a></sup> There are a few oddities that point to this.</p>

            <p>First, a special commission of STC and government officials that Echeverría ordered to be created to investigate the crash took only five days to find that the driver was the sole party to blame, not any technical error.<sup><a id="ref134" href="#foot134">134</a></sup> Taking only five days for such a high-impact investigation raises eyebrows, but there's not much transparency to show what actually went on in the commission.</p>

            <p>Second, some reports published in Siempre! found that the causes were various and concurrent: an error in the design of signals, too many trains on the line, a radio communications failure, and a breaking failure; they weren't widely publicized due to pressure from the government to keep them quiet.<sup><a id="ref135" href="#foot135">135</a></sup> These would all be attributed to a lack of funding and overcrowding, rather than the fault of the driver.</p>

            <p>Even more extreme was what was put out by Héctor Manuel Zavala Bucio, leader of the STC's union. Nearly a decade after the crash, Zavala Bucio alleged that the crash was a premeditated "political stunt" to encourage the authorities to support automatic train control, but didn't specify who planned it.<sup><a id="ref136" href="#foot136">136</a></sup> The known testimony from both drivers doesn't show any indications of sabotage; only the issues mentioned in the paragraph above as well as miscommunication.<sup><a id="ref137" href="#foot137">137</a></sup></p>
            `,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p5s4',
			alignment: 'full',
            title: 'Again: Self-Interest or Public Good?',
			description: `<p>Again, it's time to look at the motives behind this episode of the conflict over the Metro.</p>

            <p>The economic slump theory assumes Echeverría's best intentions out of the three theories; it takes away the blame for the bad things and gives him the credit for the good things. However, if his odd sudden purchase of Metro cars was an attempt to save the economy, it didn't make a ton of sense. This is because the economy was experiencing inflation, but not stagflation: the economy was still growing.<sup><a id="ref138" href="#foot138">138</a></sup> Another part of Echeverría's plan to call into question was his handling of the bus network. His using buses as feeders for the Metro only ended up worsening oversaturation of the Metro, by forcing everyone through there. This went contrary to the ICA plan that his predecessor followed, which was to have some bus routes go from one suburb to another without sending passengers through the city center. So, this theory portrays Echeverría as acting in good faith to the public good, but not very effectively.</p>

            <p>The Echeverrían freeze theory gets closer to corruption, seeing as the regent he appointed had direct legal ties with the Alianza. It still does allow the possibility, however, that he simply disagreed that the Metro would be the best option, given his stances for nationalization and against urban growth. Still, it did not serve the public good effectively, seeing as it led to crammed subway cars and a crash.</p>

            <p>Of course, the false flag gets the closest to corruption, without any good intentions from any part of the government. In the best case scenario, the government hid the true causes of the crash, which would be the fault of the halted expansion caused by one of the two other theories, and imprisoned an innocent man as the result. In the worst case scenario, government workers decided to cause a fatal crash to convince the same government to add safety features.</p>

            <p>The common thread between these is that his Metro policies were not beneficial to the public. While his ideologies weren't inherently harmful, they were miscalculated. While Uruchurtu's ideas could have worked out fine with the same ideologies, once Díaz Ordaz committed such a large amount of money and political capital into the project, it became a point of no return, where leaving the project half-finished left it oversaturated and prone to disaster. Díaz Ordaz' rule that 80% of STC revenue had to be reinvested was an attempt at avoiding this, but it simply wasn't enough. Even if Echeverría had the best of intentions with his other projects that he felt were more important, anything that left the Metro hanging made a crash inevitable.</p>

            <p>As for whether or not Echeverría was more influenced by public good or self-interest, it's impossible to be certain, but the self-interest seems pretty far linked to him given that Sentíes was the one with ties to the Alianza, not him. Maybe he stuck so strictly to his ideologies as a result of PRI pressure, but that also seems unlikely given that pro-Metro forces were what prevailed in the PRI just 6 years earlier. More likely, he did at least put mostly-good faith into serving his country well.</p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p6',
			alignment: 'center',
			description: '<p style="text-align: center; font-size: 48px">Part VI: Conclusion</p>',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p6s1',
			alignment: 'full',
            title: 'Recap: Uruchurtu vs. Díaz Ordaz',
			description: `Uruchurtu and Díaz Ordaz were diametrically opposed in the fight over the Metro. They were both forced to their positions because of various factors. Uruchurtu was forced by his middle-class base (which enjoyed his classism, nationalism, xenophobia, and opposition to urban growth) to oppose the Metro for ideological reasons, and forced by his ties to the Alianza to oppose the Metro for political reasons. Díaz Ordaz was forced by his PRI base (which enjoyed and nominated him for his international industrialism) to support the Metro for ideological reasons, forced by pressure from the tourism industry to support the Metro for political reasons, and personal ties to the ICA to support the Metro for personal reasons. Both the Alianza and ICA had financial stakes in their positions, though the ICA's were more subtle (through real estate speculation).`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p6s2',
			alignment: 'full',
            title: 'Recap: Echeverría-Era Freeze',
			description: `While Echeverría didn't have the same kind of head-to-head battle like Díaz Ordaz and Uruchurtu did, he did essentially have a hidden conflict between him, Sentíes, the PRI (in pressuring him to stick to his internationalist policy), and the Alianza, versus riders of a metro system desperately in need of renovations. Since the latter didn't have a figurehead to force the administration to do anything, they neglected the Metro, until, intentional or not, the crash became a "figurehead" in forcing the administration to do at least something, albeit not much. In the end, even if Echeverría had the best of intentions, his inaction with the Metro came back to bite him—and many in Mexico City's lower class.`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p6s3',
			alignment: 'full',
            title: 'Bigger Picture',
			description: `<p>Now that the narrative allows for hindsight, while Díaz Ordaz's plan for the Metro looked good on ICA paper, it put his successors in a bind with what fiscal policy they were able to pursue in a crisis, by not only accruing tons of debt to the French, but also by essentially leaving future presidents to choose between essential services and funding the Metro. While Uruchurtu's xenophobic reasons for the Metro seem problematic, they were what was popularly supported, and also what would have likely turned out better in hindsight. Díaz Ordaz didn't have hindsight of course, but consulting other companies rather than letting the ICA continue its monopoly over public works in the capital would likely have resulted in more sustainable plans.</p>

            <p>While Echeverría's ideologies were the same as Uruchurtu's, Uruchurtu's only could have worked before Díaz Ordaz passed the point of no return, where it couldn't be left half-finished without fatal consequences.</p>`,
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'p6s4',
			alignment: 'full',
            title: 'Takeaways',
			description: `<p>There are three primary lessons to be learned from this narrative about a small metro system in a developing capital.</p>

            <ol>
                <li>Follow the money — without the Alianza, ICA, French banks, and other special interest groups, there would have been much less pressure on Díaz Ordaz, Uruchurtu, Echeverría, and Sentías to polarize themselves so far on the Metro issue. Maybe they could have negotiated a compromise if they weren't all pulled apart by their groups.</li>
                <li>Politicians should be wary of their preferred economic theories on too high a pedestal — choosing ideology above short-term but major practical concerns was what ruined the Metro under Echeverría.</li>
                <li>Coordination between administrations is key — in many governments around the world, plans will shift greatly between each administration, which only last six years in Mexico City. It's vital for politicians who successfully enact large initiatives to make sure those initiatives both can be and will be funded into the future. Even a country where presidents essentially nominated their preferred successor failed to coordinate from one term to the next.</li>
            </ol>

            <p>As all the motives of the various actors of this narrative have been lost to history, all we can do is at least learn the lessons of that history before it slips away as well.</p>
            
            <blockquote>Those who look for the lost records of the Metro's tragedy, after 33 years of forgotten oblivion, will quite possibly only find silence. Many of the protagonists have died. Others were lost by the public eye. [...] That tragedy, which shocked the life of Mexico City, happened on a Monday that was particularly cloudy. Forgotten.</blockquote><p style="text-align: right">Luis Guillermo Hernández, "La tragedia olvidada," <i>El Universal</i><sup><a id="ref139" href="#foot139">139</a></sup></p style="text-align: right">`,
			onChapterEnter: [],
			onChapterExit: [],
		},
        {
			id: 'bibliography',
			alignment: 'full',
            title: 'Bibliography',
			description: `<div class="ref-item">
                agentphantom. Ciudad de México.json. In mexico-geojson repository. GitHub. Accessed April 21, 2026. https://github.com/PhantomInsights/mexico-geojson/blob/main/2023/states/Ciudad%20de%20M%C3%A9xico.json.
            </div>

            <div class="ref-item">
                Aguirre Botello, Manuel, and Héctor Galán Pane. "Rutas de tranvías de la Ciudad de México." Mexico Máxico. Last modified August 2015. http://www.mexicomaxico.org/Tranvias/PlanoRutas/RutasTranvias.htm.
            </div>

            <div class="ref-item">
                Banco de México. Serie histórica diaria del tipo de cambio peso-dólar (CF373). Sistema de Información Económica. Accessed April 20, 2026. https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?sector=6&accion=consultarCuadro&idCuadro=CF373.
            </div>

            <div class="ref-item">
                Cámara de Diputados del Congreso de los Estados Unidos Mexicanos. Diario de los Debates de la Cámara de Diputados, XLVI Legislatura, tercer año de ejercicio, período ordinario, 13 de septiembre de 1966. https://cronica.diputados.gob.mx/DDebates/46/3er/Ord/19660913.html..
            </div>

            <div class="ref-item">
                Conde de Arriaga, Jesús Francisco. "A 45 Años de La Tragedia Del Metro Viaducto o Una Breve Historia Del Transporte En La Ciudad de México." Tierra Adentro, October 20, 2020. https://tierraadentro.fondodeculturaeconomica.com/a-45-anos-de-la-tragedia-del-metro-viaducto-o-una-breve-historia-del-transporte-en-la-ciudad-de-mexico.
            </div>

            <div class="ref-item">
                Constitución Política de los Estados Unidos Mexicanos. Artículo 83.
            </div>

            <div class="ref-item">
                Davis, Diane E. Urban Leviathan: Mexico City in the Twentieth Century. Temple University Press, 1994.
            </div>

            <div class="ref-item">
                "Documentos y Comentarios En Torno al Viaje Del Presidente Echeverría (Marzo-Abril de 1973)." Foro Internacional 14, no. 1 (53) (1973): 1–53. http://www.jstor.org/stable/27753630.
            </div>

            <div class="ref-item">
                Echeverría, Luis. Informes Presidenciales – Luis Echeverría Álvarez, 2006. https://www.diputados.gob.mx/sedia/sia/re/RE-ISS-09-06-14.pdf.
            </div>

            <div class="ref-item">
                Figueroa, Óscar. "La Evolución de Las Políticas de Transporte Urbano Colectivo En La Ciudad de México Entre 1965 y 1988." Estudios Demográficos y Urbanos 5, no. 2 (May 1, 1990): 221–35. https://doi.org/10.24201/edu.v5i2.770.
            </div>

            <div class="ref-item">
                Gribomont, C., and M. Rimez. "La política económica del gobierno de Luis Echeverría (1971–1976): Un primer ensayo de interpretación." El Trimestre Económico 44, no. 176 (1977): 771–835. http://www.jstor.org/stable/20856661.
            </div>

            <div class="ref-item">
                González de León, Teodoro. Interview by Miquel Adrià. Translated by author. "Entrevista con Teodoro González de León." Letras Libres, August 31, 2002.
            </div>

            <div class="ref-item">
                González, Ovidio. "El Metro de Ciudad de México." EURE 14, no. 42 (1988): 63–82. eure.cl/index.php/eure/article/download/984/94/5321.
            </div>

            <div class="ref-item">
                Hernández, Luis Guillermo. Translated by author. "La tragedia olvidada." El Universal, October 20, 2008. https://archivo.eluniversal.com.mx/primera/31830.html.
            </div>

            <div class="ref-item">
                Hernández, Luis Guillermo. "Sabotaje causó accidente." El Universal, October 22, 2008. https://archivo.eluniversal.com.mx/ciudad/92367.html.
            </div>

            <div class="ref-item">
                Hernández Tirado, Concepción. "El sistema de transporte colectivo Metro de la Ciudad de México". 1991. https://ru.dgb.unam.mx/server/api/core/bitstreams/ad9dd07b-a3b1-4c3f-811a-45661d4baf66/content.
            </div>

            <div class="ref-item">
                Joaquin, Doneliza. Olympic Transportation Planning: The Legacies of Barcelona and Beijing. Master’s thesis, Columbia University, Graduate School of Architecture, Planning and Preservation, 2012. https://doi.org/10.7916/D8XD17TK.
            </div>

            <div class="ref-item">
                Instituto Nacional de Estadística y Geografía. 6° Censo de Población 1940: Distrito Federal. Partes 1–2. México: INEGI, historical products. Accessed April 21, 2026. https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/historicos/1329/702825411831-2/702825411831-2_1.pdf; https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/historicos/1329/702825411831-2/702825411831-2_2.pdf.
            </div>

            <div class="ref-item">
                Instituto Nacional de Estadística y Geografía. VIII Censo General de Población y Vivienda 1960. Accessed April 22, 2026. https://www.inegi.org.mx/programas/ccpv/1960/.
            </div>

            <div class="ref-item">
                Instituto Nacional de Estadística y Geografía. "Censo de Población y Vivienda 1970." Accessed April 20, 2026. https://www.inegi.org.mx/programas/ccpv/1970/.
            </div>

            <div class="ref-item">
                Instituto Nacional de Estadística y Geografía. "Censo de Población y Vivienda 1980." Accessed April 20, 2026. https://www.inegi.org.mx/programas/ccpv/1980/.
            </div>

            <div class="ref-item">
                Letteri, Michael Joseph. "Wheels of Government: The Alianza de Camioneros and the Political Culture of P.R.I. Rule, 1929-1981." eScholarship. Dissertation, University of California, 2014. https://escholarship.org/content/qt0026f8n5/qt0026f8n5_noSplash_04894856fc80cbf3ef61f0db8e7d7c45.pdf.
            </div>

            <div class="ref-item">
                "List of Subway Lines by Length," NYCTransitForums, accessed April 2026. https://www.nyctransitforums.com/topic/25764-list-of-subway-lines-by-length/page/2/.
            </div>

            <div class="ref-item">
                Los Angeles County Metropolitan Transportation Authority. "Facts at a Glance." Accessed April 20, 2026. https://www.metro.net/about/facts-glance/.
            </div>

            <div class="ref-item">
                Lowe, Arbon Jack. "Mexico’s Metro." Américas 22, no. 7 (July 1970): 30–35.
            </div>

            <div class="ref-item">
                Mapbox. https://www.mapbox.com.
            </div>

            <div class="ref-item">
                Navarro Benítez, Bernardo. "El Metro de La Ciudad de México." Revista Mexicana de Sociología, 5, 46, no. 4 (1984): 85–101. https://doi.org/10.2307/3540347.
            </div>

            <div class="ref-item">
                Navarro Benítez, Bernardo. "El Metro Como Sistema de Transporte de La Fuerza de Trabajo." Thesis, Dirección General de Bibliotecas y Servicios Digitales de Información, 1991. https://tesiunamdocumentos.dgb.unam.mx/ppt1997/0161932/0161932.pdf.
            </div>

            <div class="ref-item">
                Paz, Octavio. Interview by Claude Fell. Translated by author. "Vuelta a ‘El Laberinto de la Soledad.’" In El Laberinto de La Soledad, 339. Ciudad de México, Distrito Federal: Fondo de Cultura Económica, 1999.
            </div>

            <div class="ref-item">
                Quijano Torres, Manuel. 200 Años de Administración Pública en México. Tomo III: Los Gabinetes en México, 1821–2012. Mexico City: Instituto Nacional de Administración Pública, 2012, https://archivos.juridicas.unam.mx/www/bjv/libros/7/3360/11.pdf.
            </div>

            <div class="ref-item">
                Schwandl, Robert, and Marco Monroy. "History of the Mexico City Metro." UrbanRail.Net. Accessed April 20, 2026. https://www.urbanrail.net/am/mexi/mex-history2.htm.
            </div>

            <div class="ref-item">
                Schwandl, Robert, and Marco Monroy. "Mexico City Metro Opening Dates." UrbanRail.Net. Accessed April 20, 2026. https://www.urbanrail.net/am/mexi/mex-history.htm.
            </div>

            <div class="ref-item">
                Secretaría de Gobernación, Diario Oficial de la Federación, Vol. 281, No. 51, April 29, 1967. https://www.dof.gob.mx/nota_to_imagen_fs.php?cod_diario=204221&pagina=23&seccion=0.
            </div>

            <div class="ref-item">
                Sistema de Transporte Colectivo. "Construcción de la Línea 1 del Metro de la Ciudad de México." Archived November 5, 2015. Accessed April 20, 2026. https://web.archive.org/web/20151105181341/http://www.metro.df.gob.mx/organismo/construccion1.html.
            </div>

            <div class="ref-item">
                Solano-Rojas, D., E. Cabral-Cano, E. Fernández-Torres, E. Havazli, S. Wdowinski, and L. Salazar-Tlaczani. “Remotely Triggered Subsidence Acceleration in Mexico City Induced by the September 2017 Mw 7.1 Puebla and the Mw 8.2 Tehuantepec September 2017 Earthquakes.” Proceedings of the International Association of Hydrological Sciences 382 (2020): 683–687. https://doi.org/10.5194/piahs-382-683-2020.
            </div>

            <div class="ref-item">
                State of New York, Office of the Governor. "Governor Hochul Highlights Record-Breaking Year of Performance and Ridership for the MTA in 2025." January 2, 2026. Accessed April 23, 2026. https://www.governor.ny.gov/news/governor-hochul-highlights-record-breaking-year-performance-and-ridership-mta-2025.
            </div>

            <div class="ref-item">
                "Subway in Mexico City Is Opened by President." The New York Times, September 5, 1969. https://www.nytimes.com/1969/09/05/archives/subway-in-mexico-city-is-opened-by-president.html.
            </div>

            <div class="ref-item">
                "Tenochtitlan." National Geographic — Education. Accessed April 12, 2026. https://education.nationalgeographic.org/resource/tenochtitlan/.
            </div>

            <div class="ref-item">
                Ulin, Maxwell E.P. "Ticket to the Past: A Political History of the Mexico City Metro, 1958-1969." Grand Valley Journal of History, 4, 4, no. 2 (2015). https://scholarworks.gvsu.edu/gvjh/vol4/iss2/4/.
            </div>

            <div class="ref-item">
                U.S. Bureau of Labor Statistics. CPI Inflation Calculator. Accessed April 20, 2026. https://www.bls.gov/data/inflation_calculator.htm.
            </div>

            <div class="ref-item">
                U.S. Census Bureau. QuickFacts: New York County, Richmond County, Kings County, Queens County, Bronx County, New York; Population Estimates, 2022 (PST045222). Accessed April 23, 2026. https://www.census.gov/quickfacts/fact/table/newyorkcountynewyork,richmondcountynewyork,kingscountynewyork,queenscountynewyork,bronxcountynewyork/PST045222.
            </div>

            <div class="ref-item">
                Villasana, Carlos. "La construcción del Metro dio lugar a hallazgos arqueológicos en el Centro Histórico." El Universal, January 8, 2023. https://www.eluniversal.com.mx/opinion/mochilazo-en-el-tiempo/la-construccion-del-metro-dio-lugar-hallazgos-arqueologicos-en-el-centro-historico/.
            </div>

            <div class="ref-item">
                Wei-Haas, Maya. "How Mexico City’s Unique Geology Makes Deadly Earthquakes Even Worse." Smithsonian Magazine, September 20, 2017. https://www.smithsonianmag.com/science-nature/how-mexico-citys-unique-geology-makes-earthquakes-even-worse-180964972/.
            </div>

            <div class="ref-item">
                World Bank. "GDP Growth (Annual %) — Mexico." World Bank Data. Accessed April 20, 2026. https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=MX.
            </div>

            <div class="ref-item">
                World Bank. "GDP (Constant 2015 US$)." World Bank Data 360. Accessed April 20, 2026. https://data360.worldbank.org/en/indicator/WB_WDI_NY_GDP_MKTP_KD?country=MEX&view=trend.
            </div>

            <div class="ref-item">
                World Bank. "Inflation, Consumer Prices (Annual %) — Mexico." World Bank Data. Accessed April 20, 2026. https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=MX.
            </div>`,
            location: {
                center: [-102.89258, 23.71025],
                zoom: 4.15,
                pitch: 0,
                bearing: 0
            },
			onChapterEnter: [],
			onChapterExit: [],
		},
        {
			id: 'endnotes',
			alignment: 'full',
            title: 'Endnotes',
			description: `
            <a id="foot1" href="#ref1">↩</a>1. Octavio Paz, interview by Claude Fell, trans. author, "Vuelta a ‘El laberinto de la soledad,’" in El laberinto de La Soledad (Ciudad de México: Fondo de Cultura Económica, 1999), 339.
            <br><br><a id="foot2" href="#ref2">↩</a>2. It is now officially Ciudad de México, led by the Head of the Government of Mexico City, as part of a restructuring that changes everything legally. It is also colloquially called just "Mexico", as if having the state "Mexico" and the country "Mexico" wasn't confusing enough. For the purposes of this analysis, it is the Federal District and it is headed by a Regent (of the Federal District Department); Manuel Quijano Torres, 200 Años de Administración Pública en México. Tomo III: Los Gabinetes en México, 1821–2012 (Mexico City: Instituto Nacional de Administración Pública, 2012), https://archivos.juridicas.unam.mx/www/bjv/libros/7/3360/11.pdf, 372; 
            <br><br><a id="foot3" href="#ref3">↩</a>3. "Tenochtitlan," National Geographic — Education, accessed April 12, 2026, https://education.nationalgeographic.org/resource/tenochtitlan/.
            <br><br><a id="foot4" href="#ref4">↩</a>4. Diane E. Davis, Urban Leviathan: Mexico City in the Twentieth Century (Temple University Press, 1994), 270–271, 330.
            <br><br><a id="foot5" href="#ref5">↩</a>5. Manuel Aguirre Botello and Héctor Galán Pane, "Rutas de tranvías de la Ciudad de México," Mexico Máxico, last modified August 2015, http://www.mexicomaxico.org/Tranvias/PlanoRutas/RutasTranvias.htm.
            <br><br><a id="foot6" href="#ref6">↩</a>6. Bernardo Navarro Benítez, "El Metro Como Sistema de Transporte de La Fuerza de Trabajo" (thesis, Dirección General de Bibliotecas y Servicios Digitales de Información, 1991), https://tesiunamdocumentos.dgb.unam.mx/ppt1997/0161932/0161932.pdf, 29–30.
            <br><br><a id="foot7" href="#ref7">↩</a>7. Michael Joseph Letteri, "Wheels of Government: The Alianza de Camioneros and the Political Culture of P.R.I. Rule, 1929–1981" (Dissertation, University of California, 2014), https://escholarship.org/content/qt0026f8n5/qt0026f8n5_noSplash_04894856fc80cbf3ef61f0db8e7d7c45.pdf, 323.
            <br><br><a id="foot8" href="#ref8">↩</a>8. Navarro Benítez, "El Metro Como Sistema", 30.
            <br><br><a id="foot9" href="#ref9">↩</a>9. Ibid., 32.
            <br><br><a id="foot10" href="#ref10">↩</a>10. Ibid., 59.
            <br><br><a id="foot11" href="#ref11">↩</a>11.  Instituto Nacional de Estadística y Geografía, 6° Censo de Población 1940: Distrito Federal, partes 1 y 2, México: INEGI, historical products, accessed April 21, 2026, https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/historicos/1329/702825411831-2/702825411831-2_1.pdf and https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/historicos/1329/702825411831-2/702825411831-2_2.pdf.
            <br><br><a id="foot12" href="#ref12">↩</a>12. U.S. Census Bureau, QuickFacts: New York County, Richmond County, Kings County, Queens County, Bronx County, New York; Population Estimates, 2022 (PST045222), accessed April 23, 2026, https://www.census.gov/quickfacts/fact/table/newyorkcountynewyork,richmondcountynewyork,kingscountynewyork,queenscountynewyork,bronxcountynewyork/PST045222.
            <br><br><a id="foot13" href="#ref13">↩</a>13. Instituto Nacional de Estadística y Geografía, VIII Censo General de Población y Vivienda 1960, accessed April 23, 2026, https://www.inegi.org.mx/programas/ccpv/1960/#tabulados.
            <br><br><a id="foot14" href="#ref14">↩</a>14. U.S. Census Bureau, QuickFacts: New York County & boroughs (PST045222).
            <br><br><a id="foot15" href="#ref15">↩</a>15. Navarro Benítez, "El Metro Como Sistema", 39–40.
            <br><br><a id="foot16" href="#ref16">↩</a>16. Maxwell E. P. Ulin, "Ticket to the Past: A Political History of the Mexico City Metro, 1958–1969," Grand Valley Journal of History 4, no. 2 (2015), https://scholarworks.gvsu.edu/gvjh/vol4/iss2/4/, 2–3.
            <br><br><a id="foot17" href="#ref17">↩</a>17.  Bernardo Navarro Benítez. "El Metro de La Ciudad de México," Revista Mexicana de Sociología, 5, 46, no. 4 (1984): 85–101, https://doi.org/10.2307/3540347, 87; Ulin, "Ticket to the Past", 2–3.
            <br><br><a id="foot18" href="#ref18">↩</a>18. Navarro Benítez, "El Metro de La Ciudad," 85.
            <br><br><a id="foot19" href="#ref19">↩</a>19. Navarro Benítez, "El Metro Como Sistema", 39–40.
            <br><br><a id="foot20" href="#ref20">↩</a>20. Ibid.
            <br><br><a id="foot21" href="#ref21">↩</a>21. Paz, interview by Claude Fell, trans. author, "Vuelta a ‘El laberinto de la soledad.'"
            <br><br><a id="foot22" href="#ref22">↩</a>22. Davis, Urban Leviathan, 155.
            <br><br><a id="foot23" href="#ref23">↩</a>23. Constitución Política de los Estados Unidos Mexicanos, art. 83.
            <br><br><a id="foot24" href="#ref24">↩</a>24. Ulin, "Ticket to the Past", 9–10; https://en.wikipedia.org/wiki/Confederation_of_Mexican_Workers
            <br><br><a id="foot25" href="#ref25">↩</a>25. Letteri, "Wheels of Government," 2.
            <br><br><a id="foot26" href="#ref26">↩</a>26. Davis, Urban Leviathan, 58–59.
            <br><br><a id="foot27" href="#ref27">↩</a>27. Letteri, "Wheels of Government," 2.
            <br><br><a id="foot28" href="#ref28">↩</a>28. Ulin, "Ticket to the Past", 6.
            <br><br><a id="foot29" href="#ref29">↩</a>29. Davis, Urban Leviathan, 150.
            <br><br><a id="foot30" href="#ref30">↩</a>30. Navarro Benítez, "El Metro Como Sistema", 38.
            <br><br><a id="foot31" href="#ref31">↩</a>31. Davis, Urban Leviathan, 346.
            <br><br><a id="foot32" href="#ref32">↩</a>32. Navarro Benítez, "El Metro Como Sistema", 40; Davis, Urban Leviathan, 150.
            <br><br><a id="foot33" href="#ref33">↩</a>33. Navarro Benítez, "El Metro Como Sistema", 43.
            <br><br><a id="foot34" href="#ref34">↩</a>34. Ibid.
            <br><br><a id="foot35" href="#ref35">↩</a>35. Ibid.
            <br><br><a id="foot36" href="#ref36">↩</a>36. Ibid.
            <br><br><a id="foot37" href="#ref37">↩</a>37. Ibid.
            <br><br><a id="foot38" href="#ref38">↩</a>38. Ibid.
            <br><br><a id="foot39" href="#ref39">↩</a>39. Carlos Villasana, "La construcción del Metro dio lugar a hallazgos arqueológicos en el Centro Histórico," El Universal, January 8, 2023, https://www.eluniversal.com.mx/opinion/mochilazo-en-el-tiempo/la-construccion-del-metro-dio-lugar-hallazgos-arqueologicos-en-el-centro-historico/; Robert Schwandl and Marco Monroy, "History of the Mexico City Metro," UrbanRail.Net, accessed April 20, 2026, https://www.urbanrail.net/am/mexi/mex-history2.htm.
            <br><br><a id="foot40" href="#ref40">↩</a>40. Navarro Benítez, "El Metro Como Sistema", 43.
            <br><br><a id="foot41" href="#ref41">↩</a>41. Ibid.
            <br><br><a id="foot42" href="#ref42">↩</a>42. Ibid.
            <br><br><a id="foot43" href="#ref43">↩</a>43. Ibid., 88; Banco de México, Serie histórica diaria del tipo de cambio peso-dólar (CF373), Sistema de Información Económica, accessed April 20, 2026, https://www.banxico.org.mx/SieInternet/consultarDirectorioInternetAction.do?sector=6&accion=consultarCuadro&idCuadro=CF373; U.S. Bureau of Labor Statistics, CPI Inflation Calculator, accessed April 20, 2026, https://www.bls.gov/data/inflation_calculator.htm.
            <br><br><a id="foot44" href="#ref44">↩</a>44. Ulin, "Ticket to the Past", 8.
            <br><br><a id="foot45" href="#ref45">↩</a>45. Navarro Benítez, "El Metro Como Sistema", 36–37.
            <br><br><a id="foot46" href="#ref46">↩</a>46. Ulin, "Ticket to the Past", 6; Davis, Urban Leviathan, 151–152.
            <br><br><a id="foot47" href="#ref47">↩</a>47. <i>Gringo</i> is a (possibly lightly derogatory, but not necessarily) term for foreigners, most commonly used in Mexico to refer to Americans specifically; Teodoro González de León, interview by Miquel Adrià, trans. author, "Entrevista con Teodoro González de León," Letras Libres, August 31, 2002.
            <br><br><a id="foot48" href="#ref48">↩</a>48. Davis, Urban Leviathan, 154; Banco de México, Tipo de cambio peso-dólar (CF373); U.S. Bureau of Labor Statistics, CPI Inflation Calculator.
            <br><br><a id="foot49" href="#ref49">↩</a>49. Davis, Urban Leviathan, 154.
            <br><br><a id="foot50" href="#ref50">↩</a>50. Robert Schwandl and Marco Monroy, "Mexico City Metro Opening Dates," UrbanRail.Net, accessed April 20, 2026, https://www.urbanrail.net/am/mexi/mex-history.htm.
            <br><br><a id="foot51" href="#ref51">↩</a>51. Ibid.
            <br><br><a id="foot52" href="#ref52">↩</a>52. Ulin, "Ticket to the Past", 7.
            <br><br><a id="foot53" href="#ref53">↩</a>53. Navarro Benítez, "El Metro de La Ciudad," 91.
            <br><br><a id="foot54" href="#ref54">↩</a>54. Ulin, "Ticket to the Past", 3–4.
            <br><br><a id="foot55" href="#ref55">↩</a>55. Navarro Benítez, "El Metro de La Ciudad,", 91.
            <br><br><a id="foot56" href="#ref56">↩</a>56. Los Angeles did not have a metro system at this time, which wouldn't be inaugurated until 1990: Los Angeles County Metropolitan Transportation Authority, "Facts at a Glance," accessed April 20, 2026, https://www.metro.net/about/facts-glance/.
            <br><br><a id="foot57" href="#ref57">↩</a>57. González de León, interview by Adrià, "Entrevista con Teodoro González de León," Letras Libres (2002).
            <br><br><a id="foot58" href="#ref58">↩</a>58. Davis, Urban Leviathan, 155.
            <br><br><a id="foot59" href="#ref59">↩</a>59. Letteri, "Wheels of Government," 143; Davis, Urban Leviathan, 142, 152, 156.
            <br><br><a id="foot60" href="#ref60">↩</a>60. Letteri, "Wheels of Government," 215.
            <br><br><a id="foot61" href="#ref61">↩</a>61. Davis, Urban Leviathan, 156.
            <br><br><a id="foot62" href="#ref62">↩</a>62. Ibid., 163–164.
            <br><br><a id="foot63" href="#ref63">↩</a>63. Ibid., 164.
            <br><br><a id="foot64" href="#ref64">↩</a>64. Ibid., 165.
            <br><br><a id="foot65" href="#ref65">↩</a>65. Ulin, "Ticket to the Past", 8.
            <br><br><a id="foot66" href="#ref66">↩</a>66. Ibid.
            <br><br><a id="foot67" href="#ref67">↩</a>67. Davis, Urban Leviathan, 165–166.
            <br><br><a id="foot68" href="#ref68">↩</a>68. Ulin, "Ticket to the Past", 3–4.
            <br><br><a id="foot69" href="#ref69">↩</a>69. Davis, Urban Leviathan, 166–167.
            <br><br><a id="foot70" href="#ref70">↩</a>70. Ulin, "Ticket to the Past", 9; V, 168.
            <br><br><a id="foot71" href="#ref71">↩</a>71. Ulin, "Ticket to the Past", 9.
            <br><br><a id="foot72" href="#ref72">↩</a>72. Davis, Urban Leviathan, 168–169.
            <br><br><a id="foot73" href="#ref73">↩</a>73. Ulin, "Ticket to the Past", 10; Davis, Urban Leviathan, 181.
            <br><br><a id="foot74" href="#ref74">↩</a>74. Davis, Urban Leviathan, 168, 182.
            <br><br><a id="foot75" href="#ref75">↩</a>75. Ibid., 169.
            <br><br><a id="foot76" href="#ref76">↩</a>76. Ibid., 170.
            <br><br><a id="foot77" href="#ref77">↩</a>77. Ibid., 171.
            <br><br><a id="foot78" href="#ref78">↩</a>78. Cámara de Diputados del Congreso de los Estados Unidos Mexicanos, Diario de los Debates de la Cámara de Diputados, XLVI Legislatura, tercer año de ejercicio, período ordinario (13 de septiembre de 1966), https://cronica.diputados.gob.mx/DDebates/46/3er/Ord/19660913.html.
            <br><br><a id="foot79" href="#ref79">↩</a>79. Manuel Perló Cohen, Uruchurtu: el regente de hierro. Tomo II: Auge, caída y exilio (Ciudad de México: Universidad Nacional Autónoma de México, Instituto de Investigaciones Sociales; Facultad de Arquitectura, 2023), https://ru.iis.sociales.unam.mx/handle/IIS/6085.
            <br><br><a id="foot80" href="#ref80">↩</a>80. Ulin, "Ticket to the Past", 10; Davis, Urban Leviathan, 172.
            <br><br><a id="foot81" href="#ref81">↩</a>81. Doneliza Joaquin, Olympic Transportation Planning: The Legacies of Barcelona and Beijing (master’s thesis, Columbia University, Graduate School of Architecture, Planning and Preservation, 2012), https://doi.org/10.7916/D8XD17TK.
            <br><br><a id="foot82" href="#ref82">↩</a>82. Ulin, "Ticket to the Past", 10; Banco de México, Tipo de cambio peso-dólar (CF373); U.S. Bureau of Labor Statistics, CPI Inflation Calculator.
            <br><br><a id="foot83" href="#ref83">↩</a>83. Secretaría de Gobernación, Diario Oficial de la Federación, vol. 281, no. 51 (April 29, 1967), https://www.dof.gob.mx/nota_to_imagen_fs.php?cod_diario=204221&pagina=23&seccion=0, 23.
            <br><br><a id="foot84" href="#ref84">↩</a>84. Ibid., 23; Gaceta Parlamentaria, August 20, 2019, https://gaceta.diputados.gob.mx/Gaceta/64/2019/ago/20190820-I.html; Concepción Hernández Tirado, "El sistema de transporte colectivo Metro de la Ciudad de México" (1991), https://ru.dgb.unam.mx/server/api/core/bitstreams/ad9dd07b-a3b1-4c3f-811a-45661d4baf66/content, 24.
            <br><br><a id="foot85" href="#ref85">↩</a>85. Secretaría de Gobernación, Diario Oficial de la Federación (April 29, 1967), 23–24.
            <br><br><a id="foot86" href="#ref86">↩</a>86. Darío Solano-Rojas et al., "Remotely Triggered Subsidence Acceleration in Mexico City Induced by the September 2017 Mw 7.1 Puebla and the Mw 8.2 Tehuantepec September 2017 Earthquakes," Proceedings of the International Association of Hydrological Sciences 382 (2020): fig. 1, https://doi.org/10.5194/piahs-382-683-2020.
            <br><br><a id="foot87" href="#ref87">↩</a>87. Navarro Benítez, "El Metro de La Ciudad," 89.
            <br><br><a id="foot88" href="#ref88">↩</a>88. Navarro Benítez, "El Metro Como Sistema", 41.
            <br><br><a id="foot89" href="#ref89">↩</a>89. Maya Wei-Haas, "How Mexico City’s Unique Geology Makes Deadly Earthquakes Even Worse," Smithsonian Magazine, September 20, 2017, https://www.smithsonianmag.com/science-nature/how-mexico-citys-unique-geology-makes-earthquakes-even-worse-180964972/.
            <br><br><a id="foot90" href="#ref90">↩</a>90. Navarro Benítez, "El Metro de La Ciudad," 90.
            <br><br><a id="foot91" href="#ref91">↩</a>91. Darío Solano-Rojas et al., "Remotely Triggered Subsidence Acceleration," fig. 1.
            <br><br><a id="foot92" href="#ref92">↩</a>92. Schwandl and Monroy, "History of the Mexico City Metro."
            <br><br><a id="foot93" href="#ref93">↩</a>93. "Subway in Mexico City Is Opened by President," The New York Times, September 5, 1969, https://www.nytimes.com/1969/09/05/archives/subway-in-mexico-city-is-opened-by-president.html.
            <br><br><a id="foot94" href="#ref94">↩</a>94. Navarro Benítez, "El Metro de La Ciudad," 88.
            <br><br><a id="foot95" href="#ref95">↩</a>95. Sistema de Transporte Colectivo, "Construcción de la Línea 1 del Metro de la Ciudad de México," archived November 5, 2015, accessed April 20, 2026, https://web.archive.org/web/20151105181341/http://www.metro.df.gob.mx/organismo/construccion1.html.
            <br><br><a id="foot96" href="#ref96">↩</a>96. Arbon Jack Lowe, "Mexico’s Metro," Américas 22, no. 7 (July 1970): 33–35.
            <br><br><a id="foot97" href="#ref97">↩</a>97. World Bank, "Inflation, Consumer Prices (Annual %) — Mexico," World Bank Data, accessed April 20, 2026, https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=MX.
            <br><br><a id="foot98" href="#ref98">↩</a>98. Hernández Tirado, "El sistema de transporte colectivo Metro de la Ciudad de México" (1991), 26.
            <br><br><a id="foot99" href="#ref99">↩</a>99. This would not be remotely the worst that Mexico would see, as it would rise to 132% by 1987; World Bank, "Inflation, Consumer Prices."
            <br><br><a id="foot100" href="#ref100">↩</a>100. World Bank, "GDP (Constant 2015 US$)," World Bank Data 360, accessed April 20, 2026, https://data360.worldbank.org/en/indicator/WB_WDI_NY_GDP_MKTP_KD?country=MEX&view=trend.
            <br><br><a id="foot101" href="#ref101">↩</a>101. C. Gribomont and M. Rimez, "La política económica del gobierno de Luis Echeverría (1971–1976): Un primer ensayo de interpretación," El Trimestre Económico 44, no. 176 (1977): 780–781, http://www.jstor.org/stable/20856661.
            <br><br><a id="foot102" href="#ref102">↩</a>102. Ibid., 792, 805–806.
            <br><br><a id="foot103" href="#ref103">↩</a>103. "Documentos y comentarios en torno al viaje del presidente Echeverría (marzo–abril de 1973)," Foro Internacional 14, no. 1 (53) (1973): 1–2, 19, http://www.jstor.org/stable/27753630.
            <br><br><a id="foot104" href="#ref104">↩</a>104. Gribomont and Rimez, "La política económica del gobierno," 796–797.
            <br><br><a id="foot105" href="#ref105">↩</a>105. Navarro Benítez, "El Metro de La Ciudad," 91; Davis, Urban Leviathan, 204.
            <br><br><a id="foot106" href="#ref106">↩</a>106. Gribomont and Rimez, "La política económica del gobierno," 822.
            <br><br><a id="foot107" href="#ref107">↩</a>107. Most comparable to American State of the Union addresses; Schwandl and Monroy, "Mexico City Metro Opening Dates."
            <br><br><a id="foot108" href="#ref108">↩</a>108. In March 2026 worth USD$1.665B; Banco de México, Tipo de cambio peso-dólar (CF373); U.S. Bureau of Labor Statistics, CPI Inflation Calculator.
            <br><br><a id="foot109" href="#ref109">↩</a>109. In March 2026 worth USD$937M; Ibid; In March 2026 worth USD$1.534B; Ibid.
            <br><br><a id="foot110" href="#ref110">↩</a>110. Luis Echeverría, Informes Presidenciales – Luis Echeverría Álvarez, 2006, https://www.diputados.gob.mx/sedia/sia/re/RE-ISS-09-06-14.pdf, 15.
            <br><br><a id="foot111" href="#ref111">↩</a>111. Ibid., 216.
            <br><br><a id="foot112" href="#ref112">↩</a>112. Schwandl and Monroy, "Mexico City Metro Opening Dates."
            <br><br><a id="foot113" href="#ref113">↩</a>113. Instituto Nacional de Estadística y Geografía, "Censo de Población y Vivienda 1970," accessed April 20, 2026, https://www.inegi.org.mx/programas/ccpv/1970/; Instituto Nacional de Estadística y Geografía, "Censo de Población y Vivienda 1980," accessed April 20, 2026, https://www.inegi.org.mx/programas/ccpv/1980/.
            <br><br><a id="foot114" href="#ref114">↩</a>114. Davis, Urban Leviathan, 203.
            <br><br><a id="foot115" href="#ref115">↩</a>115. Ibid., 207.
            <br><br><a id="foot116" href="#ref116">↩</a>116. Lowe, "Mexico's Metro", 32, 35.
            <br><br><a id="foot117" href="#ref117">↩</a>117. Schwandl and Monroy, "Mexico City Metro Opening Dates."
            <br><br><a id="foot118" href="#ref118">↩</a>118. Navarro Benítez, "El Metro de La Ciudad," 91.
            <br><br><a id="foot119" href="#ref119">↩</a>119. Óscar Figueroa, "La evolución de las políticas de transporte urbano colectivo en la Ciudad de México entre 1965 y 1988," Estudios Demográficos y Urbanos 5, no. 2 (May 1, 1990): 221–35, https://doi.org/10.24201/edu.v5i2.770, 225.
            <br><br><a id="foot120" href="#ref120">↩</a>120. Davis, Urban Leviathan, 231.
            <br><br><a id="foot121" href="#ref121">↩</a>121. Navarro Benítez, "El Metro Como Sistema", 81; C, 91–92; Ovidio González, "El Metro de Ciudad de México," EURE 14, no. 42 (1988): 63–82, https://eure.cl/index.php/eure/article/download/984/94/5321, 68; Davis, Urban Leviathan, 230.
            <br><br><a id="foot122" href="#ref122">↩</a>122. Navarro Benítez, "El Metro Como Sistema", 80.
            <br><br><a id="foot123" href="#ref123">↩</a>123. State of New York, Office of the Governor, "Governor Hochul Highlights Record-Breaking Year of Performance and Ridership for the MTA in 2025," January 2, 2026, accessed April 23, 2026, https://www.governor.ny.gov/news/governor-hochul-highlights-record-breaking-year-performance-and-ridership-mta-2025; "List of Subway Lines by Length," NYCTransitForums, accessed April 23, 2026, https://www.nyctransitforums.com/topic/25764-list-of-subway-lines-by-length/page/2/.
            <br><br><a id="foot124" href="#ref124">↩</a>124. Ibid., 82; Davis, Urban Leviathan, 230.
            <br><br><a id="foot125" href="#ref125">↩</a>125. Navarro Benítez, "El Metro Como Sistema", 82.
            <br><br><a id="foot126" href="#ref126">↩</a>126. Davis, Urban Leviathan, 230.
            <br><br><a id="foot127" href="#ref127">↩</a>127. Ibid., 230; Navarro Benítez, "El Metro Como Sistema", 92–93; Banco de México, Tipo de cambio peso-dólar (CF373); U.S. Bureau of Labor Statistics, CPI Inflation Calculator.
            <br><br><a id="foot128" href="#ref128">↩</a>128. Navarro Benítez, "El Metro Como Sistema", 92–93.
            <br><br><a id="foot129" href="#ref129">↩</a>129. Jesús Francisco Conde de Arriaga, "A 45 Años de la Tragedia del Metro Viaducto o Una Breve Historia del Transporte en la Ciudad de México," Tierra Adentro, October 20, 2020, https://tierraadentro.fondodeculturaeconomica.com/a-45-anos-de-la-tragedia-del-metro-viaducto-o-una-breve-historia-del-transporte-en-la-ciudad-de-mexico; Banco de México, Tipo de cambio peso-dólar (CF373); U.S. Bureau of Labor Statistics, CPI Inflation Calculator.
            <br><br><a id="foot130" href="#ref130">↩</a>130. Davis, Urban Leviathan, 223–224.
            <br><br><a id="foot131" href="#ref131">↩</a>131. Navarro Benítez, "El Metro Como Sistema", 81; C, 91–92; Ovidio González, "El Metro de Ciudad de México," EURE 14, no. 42 (1988): 68, https://eure.cl/index.php/eure/article/download/984/94/5321.
            <br><br><a id="foot132" href="#ref132">↩</a>132. Davis, Urban Leviathan, 205.
            <br><br><a id="foot133" href="#ref133">↩</a>133. Conde de Arriaga, "A 45 Años de la Tragedia."
            <br><br><a id="foot134" href="#ref134">↩</a>134. Ibid.
            <br><br><a id="foot135" href="#ref135">↩</a>135. Ibid.
            <br><br><a id="foot136" href="#ref136">↩</a>136. Ibid.; Luis Guillermo Hernández, "Sabotaje causó accidente," El Universal, October 22, 2008, https://archivo.eluniversal.com.mx/ciudad/92367.html.
            <br><br><a id="foot137" href="#ref137">↩</a>137. Luis Guillermo Hernández, trans. author,"La tragedia olvidada," El Universal, October 20, 2008, https://archivo.eluniversal.com.mx/primera/31830.html.
            <br><br><a id="foot138" href="#ref138">↩</a>138. World Bank, "GDP Growth (Annual %) — Mexico," World Bank Data, accessed April 20, 2026, https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=MX.
            <br><br><a id="foot139" href="#ref139">↩</a>139. Hernández, "La tragedia olvidada."
            `,
			onChapterEnter: [],
			onChapterExit: [],
		},
    ]
};
