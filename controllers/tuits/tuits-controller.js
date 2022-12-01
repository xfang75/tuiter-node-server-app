import * as tuitsDao from '../tuits/tuits-dao.js'

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
  app.get('/api/tuits', findTuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
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

