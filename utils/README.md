# Example d'utilisation des fonctions Utils :

## DistanceUtils.js

```
const distanceUtils = require('./utils/PingUtils')

// La Rochelle -> Dompierre-sur-Mer
console.log(distanceUtils.getDistanceFromLatLon(46.159793, -1.151105, 46.187109, -1.058601))"

❯ 7.7433953985690485
```

```
// La Rochelle -> Lyon
console.log(distanceUtils.getDistanceFromLatLon(46.159793, -1.151105, 45.760325, 4.834785))"

❯ 464.71366797680025
```
