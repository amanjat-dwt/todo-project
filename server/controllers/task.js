import Task from "../models/task.js";

// export const createTask = async (req, res) => {
//   const { title } = req.body;

//   try {
//     const result = await Task.create({ title: title });
//     res.status(200).json({ result });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." });
//   }
// };

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  const newTask = Task.create({ title: task });
  console.log(newTask);

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(499).json({ message: error.message });
  }
};
