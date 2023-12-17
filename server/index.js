const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require('./models/User');

//Video section
const multer = require('multer');
const VideoModel = require('./models/Video');
const sanitizeFilename = require('sanitize-filename');


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Query
const QueryModel = require('./models/Query');
const sessionSecret = process.env.SESSION_SECRET || 'a38ebe1628cf6092be0ba8aa8e1ed286875afd11e1da2dabfc875d6afc4a66c9';



// Update MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://pranavkumar97954:zlVxT7INPRW8Sjbi@cluster0.gi6fh6q.mongodb.net/akash?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

//Authentication Section
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password == password) {
          // Send user information in the response
          //req.session.user = user;
          res.json({ status: "Success", user: user });
        } else {
          res.json({ status: "Password is incorrect" });
        }
      } else {
        res.json({ status: "No record exists" });
      }
    })
    .catch(error => {
      console.error('MongoDB Query Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  UserModel.create({ name, email, password })
    .then((user) => {
      console.log('User registered:', user);
      res.json({ message: 'Registration successful' });
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});




//Video Section
const createMulter = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `videos/${folderName}`);
    },
    filename: (req, file, cb) => {
      const sanitizedFilename = sanitizeFilename(file.originalname);
      cb(null, sanitizedFilename);
    },
  });

  return multer({ storage: storage });
};

app.post('/english-upload-video', createMulter('english').single('video'),async (req, res) => {

  try {
    const { originalname: originalFilename } = req.file;
    const { description,folderName } = req.body;

    console.log('Received folderName:', folderName);
    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description, folderName });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/science-upload-video', createMulter('science').single('video'),async (req, res) => {
  try {
    const { originalname: originalFilename } = req.file;
    const { description,folderName } = req.body;

    console.log('Received folderName:', folderName);
    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description, folderName });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/math-upload-video', createMulter('math').single('video'),async (req, res) => {
  try {
    const { originalname: originalFilename } = req.file;
    const { description,folderName } = req.body;

    console.log('Received folderName:', folderName);
    // Sanitize the filename
    const sanitizedFilename = sanitizeFilename(originalFilename);

    // Create a new VideoModel instance
    const video = new VideoModel({ filename: sanitizedFilename, description, folderName });

    // Save the video details to the database
    await video.save();

    res.json({ status: 'Video upload successful' });
  } catch (error) {
    console.error('Upload Video Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use('/videos', express.static('videos'));

//Video View Section
app.get('/get-videos/:folderName', async (req, res) => {
  try {
    const { folderName } = req.params;
    const videos = await VideoModel.find({folderName}).exec();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//Query
app.get('/get-queries', async (req, res) => {
  try {
    const queries = await QueryModel.find().exec();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add this endpoint to post a new query
app.post('/post-query', async (req, res) => {
  const { query } = req.body;

  try {
    const newQuery = new QueryModel({ text: query });
    const savedQuery = await newQuery.save();
    res.json(savedQuery);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/post-reply/:queryId', async (req, res) => {
  const { queryId } = req.params;
  const { reply } = req.body;

  try {
    const query = await QueryModel.findById(queryId);

    if (!query) {
      return res.status(404).json({ error: 'Query not found' });
    }

    // Create a new reply
    const newReply = { text: reply };
    query.replies = [...(query.replies || []), newReply];

    // Save the updated query with the new reply
    await query.save();

    res.json(newReply);
  } catch (error) {
    console.error('Error posting reply:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//logout
const session = require('express-session');
app.use(
  session({
    //secret: 'a38ebe1628cf6092be0ba8aa8e1ed286875afd11e1da2dabfc875d6afc4a66c9', // Replace with a secure secret
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Change to true if using HTTPS
      maxAge: 3600000, // Session expiration time in milliseconds (optional)
    },
  })
);

app.post('/logout', (req, res) => {
  // Assuming you're using express-session for session management
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ error: 'Internal server error during logout' });
    } else {
      // Redirect the user to the home page after successful logout
      res.json({ message: 'Logout successful', redirectTo: '/' });
    }
  });
});


