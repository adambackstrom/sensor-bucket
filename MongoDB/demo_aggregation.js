var favorites = [
  "therm",
  "barom",
  "humid",
  "precip",
  "solar"]

db.movies.aggregate([
  {
    $match: {
      "level.viewer.rating": { $gte: 3 },
      ind: "123",
      cast: {
        $in: composite
      }
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      "level.viewer.rating": 1,
      num_favs: {
        $size: {
          $setIntersection: [
            "$sensor",
            composite
          ]
        }
      }
    }
  },
  {
    $sort: { num_favs: -1, "level.viewer.rating": -1, title: -1 }
  },
  {
    $skip: 24
  },
  {
    $limit: 1
  }
])
