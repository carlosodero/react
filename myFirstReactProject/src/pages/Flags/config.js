const flags = [
  {
    id: 1,
    country: 'Spain',
    direction: 'horizontal',
    lines: [
      { color: 'red' },
      { color: 'yellow' },
      { color: 'yellow' },
      { color: 'red' },
    ],
  },
  {
    id: 2,
    country: 'Germany',
    direction: 'horizontal',
    lines: [
      {color: 'black'},
      { color: 'red' },
      { color: 'yellow' },
    ]
  },
  {
    id: 3,
    country: 'France',
    direction: 'vertical',
    lines: [
      {color: 'red'},
      {color: 'white'},
      {color: 'blue'},
    ]
  },
  {
    id: 4,
    country: 'Japan',
    direction: 'vertical',
    lines: [
      {
        color: 'white',
        circle:
        {
          width: '120px',
          height: '120px',
          backgroundColor: 'red'
        },
      }
    ],
  },
  {
    id: 5,
    country: 'Argentina',
    direction: 'horizontal',
    lines: [
      { color: 'skyblue' },
      {
        color: 'white',
        circle:
        {
          width: '40px',
          height: '40px',
          backgroundColor: 'orange',
          margin: '20px',
          boxShadow: '0 0 35px 5px yellow,0 0 25px 10px yellow inset'
        },
      },
      { color: 'skyblue' },
    ],
  },
];

export default flags;