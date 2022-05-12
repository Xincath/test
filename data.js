var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.19122737891414943,
        "pitch": -0.049879246184953985,
        "fov": 1.1704996438068975
      },
      "linkHotspots": [
        {
          "yaw": -0.15115917886426367,
          "pitch": -0.25138719768429496,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2262615036523261,
          "pitch": 0.30331830273658156,
          "title": "Welcome",
          "text": "Explore the area"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.25269332213656526,
        "pitch": -0.28264906171473925,
        "fov": 1.1704996438068975
      },
      "linkHotspots": [
        {
          "yaw": -0.13395628077316957,
          "pitch": -0.058954674021350684,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.25269332213656526,
          "pitch": -0.28264906171473925,
          "title": "Enter the building",
          "text": "Explore the space"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.8029028514432568,
        "pitch": -0.11717583238790752,
        "fov": 1.1704996438068975
      },
      "linkHotspots": [
        {
          "yaw": -0.1762257769367821,
          "pitch": -0.20264431766084812,
          "rotation": 0.7853981633974483,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6964571911384692,
          "pitch": 0.10993733670101768,
          "title": "Spinelli Coffee Company",
          "text": "Get your daily coffee here"
        }
      ]
    }
  ],
  "name": "Testing with Engineering School",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
