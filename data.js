var APP_DATA = {
  "scenes": [
    {
      "id": "0-house-1---first-floor",
      "name": "House 1 - First Floor",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-house-2---first-floor",
      "name": "House 2 - First Floor",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.361003281485477,
          "pitch": -1.0496576448028136,
          "rotation": 0,
          "target": "2-house-2---second-floor"
        },
        {
          "yaw": -2.3678025426037834,
          "pitch": -0.08572775410411992,
          "rotation": 0,
          "target": "0-house-1---first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-house-2---second-floor",
      "name": "House 2 - Second Floor",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-exterior",
      "name": "Exterior",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18457683662510505,
          "pitch": 0.2705685684182413,
          "rotation": 0,
          "target": "1-house-2---first-floor"
        },
        {
          "yaw": 0.08131343098934174,
          "pitch": 0.2821133548291659,
          "rotation": 0,
          "target": "0-house-1---first-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sample Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
