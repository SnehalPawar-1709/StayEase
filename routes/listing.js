const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js")
const{isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingControllers=require("../controllers/listing.js");


const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


// index + create
router
    .route("/")
    .get(wrapAsync(listingControllers.index))
    .post(
      isLoggedIn,
      upload.single('image'),
      validateListing,
      wrapAsync(listingControllers.createListing)
   );
  
//home
router.get("/home", wrapAsync(listingControllers.home));

  //new route
router.get("/new",isLoggedIn,listingControllers.renderNewForm
);

// show, update, delete
router
   .route(
    "/:id")
   .get( wrapAsync(listingControllers.showListing )
  )
   .put(
    isLoggedIn,
    isOwner,
    validateListing,
  wrapAsync( listingControllers.updateListing)
)
.delete(
  isLoggedIn,
   isOwner,
  wrapAsync( listingControllers.deleteListing)
 );

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
   isOwner,
   wrapAsync(  listingControllers.renderEditform)
);


module.exports = router;
