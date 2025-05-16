/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }

  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('about', locals);
}

/**
 * GET /
 * Faqs 
*/
exports.faqs = async (req, res) => {
  const locals = {
    title: "FAQs - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('faqs', locals);
}

/**
 * GET /
 * Features
*/
exports.features = async (req, res) => {
  const locals = {
    title: "Features - NodeJs Notes",
    description: "Free NodeJS Notes App.",
  }
  res.render('features', locals);
}