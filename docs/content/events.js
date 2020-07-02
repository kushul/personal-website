const events = [
    {
        type: 'attendee',
        color: 'bg-pink-700',
        title: 'Vue JS Conference Amsterdam 2020',
        image:
            'vuejs-amsterdam-2020.jpg',
        bg_position: "bg-bottom",
        date: '2020-02-20T00:00:00.000Z',
        name: 'Vuejs conference',
        country: 'Amsterdam',
        icon: "attendee.svg",
        links: [
            {
                text: 'Blogpost',
                url:
                    'https://www.lsl.digital/blog/frontend-love-and-vuejs-amsterdam-2020'
            }

        ]
    },

    {
        type: 'participation',
        color: 'bg-purple-700',
        title: '2nd place in the webcup final 2019',
        image:
            'webcup-final-mayotte-2019.jpg',
        bg_position: "bg-top",
        date: '2019-12-07T00:00:00.000Z',
        name: 'Webcup Final',
        country: 'Mayotte',
        icon: "competition.svg",
        links: [
            {
                text: 'Report by ict.io',
                url:
                    'https://ict.io/double-finale-internationale-webcup/'
            }
        ]
    },
    {
        type: 'participation',
        color: 'bg-yellow-700',
        title: '1st place in the krathathon 2019',
        image:
            'krakathon-2019.jpg',
        bg_position: "bg-center",
        date: '2019-10-19T00:00:00.000Z',
        name: 'Krakathon',
        icon: "competition.svg",
        country: 'Mauritius',
        links: [
            {
                text: 'Report by ict.io',
                url:
                    'https://ict.io/krakathon-2019-team-kalchul-devance-ses-adversaires-de-4000-points/'
            }
        ]
    },
    {
        type: 'participation',
        color: 'bg-green-700',
        title: 'Switch conference Mauritius 2019',
        image:
            'switch-conference-2019.jpg',
        bg_position: "bg-center",
        date: '2019-06-07T00:00:00.000Z',
        name: 'Switch conference',
        country: 'Mauritius',
        icon: "attendee.svg",
        links: [
            {
                text: 'Report by mscc.mu',
                url:
                    'https://www.mscc.mu/untitled-2/'
            }
        ]
    },
    {
        type: 'participation',
        color: 'bg-yellow-700',
        title: '1st place in the Webcup 2018',
        image:
            'webcup-winner-2018.jpg',
        bg_position: "bg-top",
        date: '2018-05-06T00:00:00.000Z',
        name: 'Webcup Maurice',
        icon: "competition.svg",
        country: 'Mauritius',
        links: [
            {
                text: 'Article by lexpress.mu',
                url:
                    'https://www.lexpress.mu/article/331246/webcup-2018-lsl-digital-en-finale-en-novembre'
            }
        ]
    },
]

export default events;