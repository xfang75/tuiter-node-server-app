import * as tuitsDao from '../tuits/tuits-dao.js'

// const currentUser = {
//   "userName": "NASA",
//   "handle": "nasa",
//   "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa_meatball_large.jpg",
// };
//
// const templateTuit = {
//   ...currentUser,
//   "topic": "Space",
//   "time": "2h",
//   "liked": false,
//   "replies": 0,
//   "retuits": 0,
//   "likes": 0,
//   "dislikes": 0,
//   "disliked": false
// }

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
  app.get('/api/tuits', findTuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.time = "now";
  newTuit.image = "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa_meatball_large.jpg";
  newTuit.userName = "NASA";
  newTuit.handle = "nasa";
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.disliked = false;
  newTuit.dislikes = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params['tid'];
  const updates = req.body;
  const status = await tuitsDao
  .updateTuit(tuitdIdToUpdate,
      updates);
  res.json(status)

}

const deleteTuit =  async (req, res) => {
  const tuitdIdToDelete = req.params['tid'];
  const status = await tuitsDao
  .deleteTuit(tuitdIdToDelete);
  res.json(status);

}

const findTuits = async (req, res) =>{
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

