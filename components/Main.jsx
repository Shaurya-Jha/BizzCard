"use client";

import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import InputColor from "react-input-color";
import { useState, useRef, Fragment } from "react";
import closeIcon from "../app/assets/icons/close.png";

// react-awesome-reveal animation library effects
import { Slide, Fade } from "react-awesome-reveal";

// imported bootstrap icons
import {
  BsLine,
  BsMessenger,
  BsSkype,
  BsTelegram,
  BsWhatsapp,
  BsBehance,
  BsDribbble,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";

// imported material design icons
import {
  MdCall,
  MdApartment,
  MdHome,
  MdSms,
  MdOutlinePhoneAndroid,
  MdChat,
  MdEmail,
  MdWeb,
  MdGpsFixed,
  MdOutlineCalendarMonth,
  MdPermMedia,
  MdAddLink,
  MdShoppingCart,
  MdTextFields,
  MdContactEmergency,
  MdCancel
} from "react-icons/md";

const Main = () => {
  // STATE MANAGEMENT

  // background / cover color value state mgmt
  const [bgCoverColor, setBgCoverColor] = useState({});
  // icon color value state management
  const [iconColor, setIconColor] = useState({});

  // state for contact information details
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [businessName, setBusinessName] = useState();
  const [businessDesc, setBusinessDesc] = useState();
  const [businessAddress, setBusinessAddress] = useState();

  // state to manage the logo image
  const [logo, setLogo] = useState(null);
  // logo ref for file upload
  const logoRef = useRef(null);

  // function to open file upload on button click
  const handleLogoClick = () => {
    logoRef.current.click();
  };

  // function to handle the logo upload
  const handleLogoUpload = (event) => {
    // temporary logo holding variable
    var companyLogo = event.target.files[0];
    // reader method to read the company file
    // FileReader let's web application async read the contents of the files stored on the user's computer
    // using the File or the Blob objects to specify the file or data to read
    var reader = new FileReader();

    // onloadend - reading finished with either success or failure
    reader.onloadend = () => {
      // if the reading is finished then read the result - reader.result
      // reader.result is the result (if successfull)
      setLogo(reader.result);
    };

    if (companyLogo) {
      // read the binary data and encode it as base64 data url
      reader.readAsDataURL(companyLogo);
    }
  };

  // state to manage the profile picture image
  const [profilePic, setProfilePic] = useState(null);
  // profile ref for file upload
  const profilePictureRef = useRef(null);

  // function to open the file upload on button click for the profile picture
  const handleProfilePictureClick = () => {
    profilePictureRef.current.click();
  };

  // function to handle the profile picture upload
  const handleProfilePictureUpload = (event) => {
    // the files[0] is used to select the first selected file from the file explorer
    // profileImage is variable to temporary hold the image
    const profileImage = event.target.files[0];
    // FileReader let's web application async read the contents of the files stored on the user's computer
    const reader = new FileReader();

    // onloadend - reading finished with either success or failure
    reader.onloadend = () => {
      // if the reading is finished then read the result - reader.result
      // reader.result is the result (if successfull)
      setProfilePic(reader.result);
    };

    if (profileImage) {
      // read the binary data and encode it as base64 data url
      reader.readAsDataURL(profileImage);
    }
  };

  // STATE's to hold values of primary actions input field
  const [mobileNumber, setMobileNumber] = useState();
  const [officeNumber, setOfficeNumber] = useState();
  const [homeNumber, setHomeNumber] = useState();
  const [smsNumber, setSmsNumber] = useState();
  const [mailLink, setMailLink] = useState();
  const [websiteLink, setWebsiteLink] = useState();
  const [locationLink, setLocationLink] = useState();
  const [telegramLink, setTelegramLink] = useState();
  const [whatsappLink, setWhatsappLink] = useState();
  const [messengerLink, setMessengerLink] = useState();
  const [skypeLink, setSkypeLink] = useState();
  const [lineLink, setLineLink] = useState();
  const [calendarLink, setCalendarLink] = useState();

  // STATE's to hold the toggle visible condition for primary actions
  const [mobileVisible, setMobileVisible] = useState(false);
  const [officeVisible, setOfficeVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [smsVisible, setSmsVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [websiteLinkVisible, setWebsiteLinkVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [telegramVisible, setTelegramVisible] = useState(false);
  const [whatsappVisible, setWhatsappVisible] = useState(false);
  const [messengerVisible, setMessengerVisible] = useState(false);
  const [skypeVisible, setSkypeVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);

  // FUNCTION's to toggle the visibility of the primary actions input fields on / off on button click
  const toggleMobileNumber = () => {
    setMobileVisible(!mobileVisible);
  };

  const toggleOfficeNumber = () => {
    setOfficeVisible(!officeVisible);
  };

  const toggleHomeNumber = () => {
    setHomeVisible(!homeVisible);
  };

  const toggleSMS = () => {
    setSmsVisible(!smsVisible);
  };

  const toggleEmailLink = () => {
    setEmailVisible(!emailVisible);
  };

  const toggleWebsiteLink = () => {
    setWebsiteLinkVisible(!websiteLinkVisible);
  };

  const toggleLocation = () => {
    setLocationVisible(!locationVisible);
  };

  const toggleTelegram = () => {
    setTelegramVisible(!telegramVisible);
  };

  const toggleWhatsapp = () => {
    setWhatsappVisible(!whatsappVisible);
  };

  const toggleMessenger = () => {
    setMessengerVisible(!messengerVisible);
  };

  const toggleSkype = () => {
    setSkypeVisible(!skypeVisible);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const toggleLine = () => {
    setLineVisible(!lineVisible);
  };

  // STATE's to hold secondary actions input fields value
  const [behanceLink, setBehanceLink] = useState();
  const [dribbbleLink, setDribbbleLink] = useState();
  const [githubLink, setGithubLink] = useState();
  const [facebookLink, setFacebookLink] = useState();

  // STATE's to hold the toggle visible condition for secondary actions
  const [behanceVisible, setBehanceVisible] = useState(false);
  const [dribbbleVisible, setDribbbleVisible] = useState(false);
  const [githubVisible, setGithubVisible] = useState(false);
  const [facebookVisible, setFacebookVisible] = useState(false);

  // FUNCTION's to toggle the visibility of the secondary actions input fields on / off on button click
  const toggleBehance = () => {
    setBehanceVisible(!behanceVisible);
  };

  const toggleDribbble = () => {
    setDribbbleVisible(!dribbbleVisible);
  };

  const toggleGithub = () => {
    setGithubVisible(!githubVisible);
  };

  const toggleFacebook = () => {
    setFacebookVisible(!facebookVisible);
  };

  // STATE TO ENABLE THE FOOTER OR NOT
  const [isFooterEnabled, setIsFooterEnabled] = useState(false);
  // function to handle the footer toggle or not
  const toggleFooter = () => {
    // this will set the toggle on / off for the toggle button
    // and show the footer if the state if true
    // and stay hidden on false state
    setIsFooterEnabled(!isFooterEnabled);
  };

  // FEATURED SECTION
  // function to add a new FeaturedSection
  const addSection = () => {
    setSections([...sections, <FeaturedSection key={sections.length} />]);
  };

  // function to remove last element from sections array on button click
  const deleteSection = () => {
    if(sections.length >= 0) {
      const newSections = [...sections];

      // remove the last inserted section from the array of sections
      newSections.pop();    // remove the last element from the array
      setSections(newSections);
    }
  }
  // Featured section component
  function FeaturedSection() {
    const [sectionTitle, setSectionTitle] = useState("");
    const [media, setMedia] = useState(null);
    const [embedMedia, setEmbedMedia] = useState("");
    const [extraText, setExtraText] = useState("");

    // state to hold visibility of input field's
    const [mediaVisible, setMediaVisible] = useState(false);
    const [embedMediaVisible, setEmbedMediaVisible] = useState(false);
    const [extraTextVisible, setExtraTextVisible] = useState(false);

    // FUNCTION's to toggle on / of input fields on button click
    const toggleMedia = () => {
      setMediaVisible(!mediaVisible);
    };

    const toggleEmbedMedia = () => {
      setEmbedMediaVisible(!embedMediaVisible);
    };

    const toggleExtraText = () => {
      setExtraTextVisible(!extraTextVisible);
    };

    return (
      <div className="bg-gray-200 p-4 rounded-2xl my-4">
        <Fade direction="up">
        <div className="flex justify-between px-2">
          <p className="text-md">Featured Section</p>
          {/* <Image src={closeIcon} alt="close" height={15} width={15} onClick={deleteSection} className="cursor-pointer ml-2" /> */}
          <MdCancel color="red" height={30} width={30} onClick={deleteSection} className="cursor-pointer" />
        </div>

        {/* input field for the section title */}
        <Input
          placeholder="setion title..."
          value={sectionTitle}
          className="my-4"
          onChange={(e) => setSectionTitle(e.target.value)}
        />

        {/* show input field for media on button click */}
        {mediaVisible && (
          <div>
            {/* input field for add media */}
            <Input type="file" className="my-4" />
          </div>
        )}

        {/* show embed media field on button click */}
        {embedMediaVisible && (
          <div>
            {/* input field for embed media */}
            <Input
              placeholder="embed media..."
              value={embedMedia}
              className="my-4"
              onChange={(e) => setEmbedMedia(e.target.value)}
            />
          </div>
        )}

        {/* show extra text textarea on button click */}
        {extraTextVisible && (
          <div>
            {/* input field for extra text */}
            <Textarea
              placeholder="extra text if any..."
              value={extraText}
              className="my-4"
              onChange={(e) => setExtraText(e.target.value)}
            />
          </div>
        )}

        {/* buttons to add media, extra text or embed media */}
        <div className="flex flex-col">
          {/* add media button */}
          <Button className="capitalize bg-white my-2" onClick={toggleMedia}>
            add media
          </Button>

          {/* add embed media button */}
          <Button
            className="capitalize bg-white my-2"
            onClick={toggleEmbedMedia}
          >
            embed media
          </Button>

          {/* add extra text button */}
          <Button
            className="capitalize bg-white my-2"
            onClick={toggleExtraText}
          >
            add text
          </Button>
        </div>
        </Fade>
      </div>
    );
  }

  // state to hold the array of data for the featured section
  // const [featuredSectionArray, setFeaturedSectionArray] = useState([]);
  // state to hold multiple section's
  const [sections, setSections] = useState([]);

  // function to add featured section div on button click
  // const addFeaturedSection = () => {
  //   // assuming your data is simple strings for this example
  //   const newFeaturedSectionData = `Data ${featuredSectionArray.length + 1}`;

  //   // updating the state by creating a new array with previous data and appending the new data
  //   setFeaturedSectionArray((prevData) => [
  //     ...prevData,
  //     newFeaturedSectionData,
  //   ]);
  // };

  return (
    // react fragment
    <Fragment>
      <div className="grid grid-cols-2">
        {/* mobile preview */}
        <div className="flex justify-center">
          <div className="fixed">
            <div className="mobile-phone">
              <div className="brove z-50">
                <span className="speaker"></span>
              </div>

              {/* main screen */}
              <div className="screen">
                {/* bg cover color */}
                <div className="h-32 bg-screen-cover"></div>
              </div>
            </div>
          </div>
        </div>

        {/* user data fields to be added */}
        <div className="flex justify-center flex-col">
          {/* header atachments */}
          <div className="my-4 py-4 mx-auto">
            <p className="text-xl">Header attachments</p>

            {/* add logo for the digital card */}
            <div className="flex items-center my-2">
              <Button onClick={handleLogoClick}>+</Button>
              {/* input field to upload the logo */}
              <input
                type="file"
                accept="image/svg, image/png, image/gif"
                className="hidden"
                ref={logoRef}
                onChange={handleLogoUpload}
              />

              <div className="flex flex-col">
                <h4 className="ml-4">Add logo</h4>
                <p className="ml-4">suggested format: svg, png or gif</p>
              </div>
            </div>

            <div className="mt-4">
              <Card className="p-2">
                <CardBody>
                  <p>
                    Recommended logo upload size is 960 x 640 pixels, with an
                    aspect ratio of 3:2{" "}
                  </p>
                </CardBody>
              </Card>
            </div>

            {/* cover color picker */}
            <div className="my-4 pt-4 flex">
              <div className="">
                <InputColor
                  initialValue="#1434A4"
                  placement="right"
                  onChange={setBgCoverColor}
                />
              </div>
              <p className="ml-4">Choose cover background color</p>
            </div>

            {/* icon color select */}
            <div className="my-4 pt-4 flex">
              <div className="">
                <InputColor
                  initialValue="#FFFFFF"
                  placement="right"
                  onChange={setIconColor}
                />
              </div>
              <p className="ml-4">Choose icon color</p>
            </div>
          </div>

          {/* divider to partition the section */}
          <Divider />

          {/* contact information section */}
          <div className="my-4 py-4 mx-auto">
            <p className="capitalize text-xl">contact information</p>

            {/* add profile picture */}
            <div className="flex items-center my-2">
              {/* profile pic of the owner */}
              <Button onClick={handleProfilePictureClick}>+</Button>
              {/* input file to accept the profile picture of the business owner */}
              <input
                type="file"
                accept="image/svg, image/png, image/gif"
                className="hidden"
                ref={profilePictureRef}
                onChange={handleProfilePictureUpload}
              />

              <div className="flex flex-col">
                <h4 className="ml-4">Add profile photo</h4>
                <p className="ml-4">suggested format: svg, png or gif</p>
              </div>
            </div>

            <div className="mt-4">
              <Card className="p-2">
                <CardBody>
                  <p>
                    Recommended profile photo size is 320 x 320 pixels, with an
                    aspect ratio of 1:1{" "}
                  </p>
                </CardBody>
              </Card>
            </div>

            {/* contact information form fields */}
            <div className="my-4 pt-1">
              {/* first name of the owner of business card */}
              <Input
                label="First name"
                type="text"
                className="my-3"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />

              {/* last name of the owner of business card */}
              <Input
                label="Last name"
                type="text"
                className="my-3"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />

              {/* gender */}
              <Input
                label="Gender"
                type="text"
                className="my-3"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              />

              {/* job title */}
              <Input
                label="Job title"
                type="text"
                className="my-3"
                value={jobTitle}
                onChange={(event) => setJobTitle(event.target.value)}
              />

              {/* business name */}
              <Input
                label="Business Name"
                type="text"
                className="my-3"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
              />

              {/* business description */}
              <Input
                label="Business Description"
                type="text"
                className="my-3"
                value={businessDesc}
                onChange={(event) => setBusinessDesc(event.target.value)}
              />

              {/* business address */}
              <Input
                label="Business Address"
                type="text"
                className="my-3"
                value={businessAddress}
                onChange={(event) => setBusinessAddress(event.target.value)}
              />
            </div>
          </div>

          {/* divider to partition the section */}
          <Divider />

          {/* primary actions */}
          <div className="my-4 py-4 mx-[50px]">
            <p className="capitalize text-lg">primary actions</p>

            {/* section to hold all input fields */}
            {/* by default they remain hidden but when user clicks button and activates them they become visible */}
            <div className="flex flex-col my-4 mx-auto">
              {/* hold mobile number input field */}
              {mobileVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleMobileNumber}
                  />
                </div>
              )}

              {/* hold office mobile number input field */}
              {officeVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="office number"
                    value={officeNumber}
                    onChange={(e) => setOfficeNumber(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleOfficeNumber}
                  />
                </div>
              )}

              {/* hold home number input field */}
              {homeVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="home number"
                    value={homeNumber}
                    onChange={(e) => setHomeNumber(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleHomeNumber}
                  />
                </div>
              )}

              {/* hold sms input field */}
              {smsVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="sms number"
                    value={smsNumber}
                    onChange={(e) => setSmsNumber(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleSMS}
                  />
                </div>
              )}

              {/* hold email input field */}
              {emailVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="email"
                    value={mailLink}
                    onChange={(e) => setMailLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleEmailLink}
                  />
                </div>
              )}

              {/* hold website link input field */}
              {websiteLinkVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="website link"
                    value={websiteLink}
                    onChange={(e) => setWebsiteLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleWebsiteLink}
                  />
                </div>
              )}

              {/* hold location link input field */}
              {locationVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="location"
                    value={locationLink}
                    onChange={(e) => setLocationLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleLocation}
                  />
                </div>
              )}

              {/* hold telegram input field */}
              {telegramVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="telegram link"
                    value={telegramLink}
                    onChange={(e) => setTelegramLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleTelegram}
                  />
                </div>
              )}

              {/* hold whatsapp link input field */}
              {whatsappVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="whatsapp link"
                    value={whatsappLink}
                    onChange={(e) => setWhatsappLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleWhatsapp}
                  />
                </div>
              )}

              {/* optional - hold messenger link input field */}
              {messengerVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="messenger link"
                    value={messengerLink}
                    onChange={(e) => setMessengerLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleMessenger}
                  />
                </div>
              )}

              {/* optional - hold skype link input field */}
              {skypeVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="skype link"
                    value={skypeLink}
                    onChange={(e) => setSkypeLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleSkype}
                  />
                </div>
              )}

              {/* optional - hold line app link input field */}
              {/* {lineVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="line link"
                    value={lineLink}
                    onChange={(e) => setLineLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleLine}
                  />
                </div>
              )} */}

              {/* hold any calendar link input field */}
              {calendarVisible && (
                <div className="flex items-center mt-2">
                  <Input
                    label="calendar link"
                    value={calendarLink}
                    onChange={(e) => setCalendarLink(e.target.value)}
                  />
                  <Image
                    src={closeIcon}
                    alt="close"
                    className="cursor-pointer ml-2"
                    height={20}
                    width={20}
                    onClick={toggleCalendar}
                  />
                </div>
              )}
            </div>

            {/* section to hold all the primary actions button to add the selected button fields */}
            <div className="my-4 items-center md:grid grid-cols-2 sm:flex flex-col">
              {/* all primary actions button in grid */}
              {/* mobile number field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  mobileVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleMobileNumber}
              >
                <div className="flex justify-center items-center">
                  <MdOutlinePhoneAndroid />
                  <p className="ml-2 text-medium">mobile</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* office number field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  officeVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleOfficeNumber}
              >
                <div className="flex justify-center items-center">
                  <MdApartment />
                  <p className="ml-2 text-medium">office</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* home number field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  homeVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleHomeNumber}
              >
                <div className="flex justify-center items-center">
                  <MdHome />
                  <p className="ml-2 text-medium">home</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* sms link field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  smsVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleSMS}
              >
                <div className="flex justify-center items-center">
                  <MdChat />
                  <p className="ml-2 text-medium">sms</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* email link field */}
              {/* <Slide delay={200} direction="up"> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  emailVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleEmailLink}
              >
                <div className="flex justify-center items-center">
                  <MdEmail />
                  <p className="ml-2 text-medium">email</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* website link field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  websiteLinkVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleWebsiteLink}
              >
                <div className="flex justify-center items-center">
                  <MdWeb />
                  <p className="ml-2 text-medium">website</p>
                </div>
                {/* Website */}
              </Button>
              {/* </Slide> */}

              {/* location field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  locationVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleLocation}
              >
                <div className="flex justify-center items-center">
                  <MdGpsFixed />
                  <p className="ml-2 text-medium">location</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* telegram field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  telegramVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleTelegram}
              >
                <div className="flex justify-center items-center">
                  <BsTelegram />
                  <p className="ml-2 text-medium">telegram</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* whatsapp field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  whatsappVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleWhatsapp}
              >
                <div className="flex justify-center items-center">
                  <BsWhatsapp />
                  <p className="ml-2 text-medium">whatsapp</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* calendar field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  calendarVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleCalendar}
              >
                <div className="flex justify-center items-center">
                  <MdOutlineCalendarMonth />
                  <p className="ml-2 text-medium">calendar</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* messenger field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  messengerVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleMessenger}
              >
                <div className="flex justify-center items-center">
                  <BsMessenger />
                  <p className="ml-2 text-medium">messenger</p>
                </div>
              </Button>
              {/* </Slide> */}

              {/* line field */}
              {/* <Slide direction="up" delay={200}> */}
              {/* <Button
                  className={`capitalize md:mx-4 w-72 sm:my-2 ${
                    lineVisible === true ? "hidden" : "block"
                  }`}
                  onClick={toggleLine}
                >
                  <div className="flex justify-center items-center">
                    <BsLine />
                    <p className="ml-2 text-medium">line</p>
                  </div>
                </Button> */}
              {/* </Slide> */}

              {/* skype field */}
              {/* <Slide direction="up" delay={200}> */}
              <Button
                className={`capitalize md:mx-4 w-72 sm:my-2 ${
                  skypeVisible === true ? "hidden" : "block"
                }`}
                onClick={toggleSkype}
              >
                <div className="flex justify-center items-center">
                  <BsSkype />
                  <p className="ml-2 text-medium">skype</p>
                </div>
              </Button>
              {/* </Slide> */}
            </div>
          </div>

          {/* divider to partition the section */}
          <Divider />

          {/* secondary actions */}
          <div className="my-4 py-4 mx-[50px]">
            <p className="capitalize text-lg">secondary actions</p>

            {/* section to hold all the secondary actions input fields */}
            <div className="flex flex-col my-4 mx-auto">
              {/* hold behance link input field */}
              {behanceVisible && (
                <Fade direction="up">
                  <div className="flex items-center mt-2">
                    {/* icon of the selected action */}
                    <div className="p-4 bg-blue-500 rounded-lg">
                      <BsBehance color="white" />
                    </div>
                    <Input
                      placeholder="username"
                      value={behanceLink}
                      onChange={(e) => setBehanceLink(e.target.value)}
                    />
                    <Image
                      src={closeIcon}
                      alt="close"
                      className="cursor-pointer ml-2"
                      height={20}
                      width={20}
                      onClick={toggleBehance}
                    />
                  </div>
                </Fade>
              )}

              {/* hold dribbble link input field */}
              {dribbbleVisible && (
                <Fade direction="up">
                  <div className="flex items-center mt-2">
                    {/* icon of the selected action */}
                    <div className="p-4 bg-pink-500 rounded-lg">
                      <BsDribbble color="white" />
                    </div>
                    <Input
                      placeholder="username"
                      value={dribbbleLink}
                      onChange={(e) => setDribbbleLink(e.target.value)}
                    />
                    <Image
                      src={closeIcon}
                      alt="close"
                      className="cursor-pointer ml-2"
                      height={20}
                      width={20}
                      onClick={toggleDribbble}
                    />
                  </div>
                </Fade>
              )}

              {/* hold github link input field */}
              {githubVisible && (
                <Fade direction="up">
                  <div className="flex items-center mt-2">
                    {/* icon of the selected action */}
                    <div className="p-4 bg-gray-500 rounded-lg">
                      <BsGithub color="white" />
                    </div>
                    <Input
                      placeholder="username"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                    />
                    <Image
                      src={closeIcon}
                      alt="close"
                      className="cursor-pointer ml-2"
                      height={20}
                      width={20}
                      onClick={toggleGithub}
                    />
                  </div>
                </Fade>
              )}

              {/* hold facebook link input field */}
              {facebookVisible && (
                <Fade direction="up">
                  <div className="flex items-center mt-2">
                    {/* icon of the selected action */}
                    <div className="p-4 bg-blue-600 rounded-lg">
                      <BsFacebook color="white" />
                    </div>
                    <Input
                      placeholder="username or pagename"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                    />
                    <Image
                      src={closeIcon}
                      alt="close"
                      className="cursor-pointer ml-2"
                      height={20}
                      width={20}
                      onClick={toggleFacebook}
                    />
                  </div>
                </Fade>
              )}
            </div>

            {/* hold all secondary actions buttons and toggle them on button click */}
            <div className="my-4 items-center md:grid grid-cols-2 sm:flex flex-col">
              {/* behance button */}
              <Slide direction="up" delay={150}>
                <Button
                  className={`capitalize md:mx-4 w-72 sm:my-2 bg-blue-500`}
                  onClick={toggleBehance}
                >
                  <div className="flex justify-center items-center">
                    <BsBehance color="white" />
                    <p className="ml-2 text-white text-medium">Behance</p>
                  </div>
                </Button>
              </Slide>

              {/* dribble button */}
              <Slide direction="up" delay={150}>
                <Button
                  className={`bg-pink-500 capitalize md:mx-4 w-72 sm:my-2`}
                  onClick={toggleDribbble}
                >
                  <div className="flex justify-center items-center">
                    <BsDribbble color="white" />
                    <p className="ml-2 text-white text-medium">Dribbble</p>
                  </div>
                </Button>
              </Slide>

              {/* github button */}
              <Slide direction="up" delay={150}>
                <Button
                  className={`capitalize md:mx-4 w-72 sm:my-2 bg-gray-700`}
                  onClick={toggleGithub}
                >
                  <div className="flex justify-center items-center">
                    <BsGithub color="white" />
                    <p className="ml-2 text-white text-medium">github</p>
                  </div>
                </Button>
              </Slide>

              {/* facebook button */}
              <Slide direction="up" delay={150}>
                <Button
                  className={`capitalize md:mx-4 w-72 sm:my-2 bg-blue-700`}
                  onClick={toggleFacebook}
                >
                  <div className="flex justify-center items-center">
                    <BsFacebook color="white" />
                    <p className="ml-2 text-white text-medium">Facebook</p>
                  </div>
                </Button>
              </Slide>
            </div>
          </div>

          {/* divider to partition the section */}
          <Divider />

          {/* toggle footer section */}
          <div className="my-4 py-4 mx-[50px]">
            <p className="capitalize text-lg">footer credit</p>

            {/* toogle button for the enable footer */}
            <div className="mt-4 flex items-center">
              <Button
                className={`${
                  isFooterEnabled ? "bg-green-600 text-white" : "bg-gray-300"
                } w-24 text-sm`}
                onClick={toggleFooter}
              >
                {isFooterEnabled ? "Enable" : "Disable"}
              </Button>
              <p className="ml-3 capitalize">enable footer</p>
            </div>
          </div>

          {/* divider to partition the section */}
          <Divider />

          {/* featured section */}
          <div className="my-4 py-4 mx-[50px]">
            <p className="capitalize text-lg">featured section</p>
            <div className="my-4">
              {/* render array of div elements */}
              {sections.map((section, index) => (
                <div key={index}>{section}</div>
              ))}
            </div>

            <Button onClick={addSection}>Add section</Button>
          </div>

          {/* <FeaturedSection /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
