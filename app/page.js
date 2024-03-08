import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    // </main>

    <main className="mx-[100px] sm:mx-4">
      {/* header component */}
      <div>
        <Header />
      </div>

      <div>
        <Main />
      </div>

      {/* footer component */}
      <div>
        <Footer />
      </div>
    </main>
  );
}


// TODO's

// 06/03/2024
// [x] - complete the header attachment section
// [x] - complete the contact information ui
// [x] - header attachments logic of uploading and other functionalities
// [x] - complete the state value management of the contact information section
// [ ] - complete the logo upload functionality

// 07/03/2024
// [x] - complete the logo upload functionality
// [x] - complete the profile picture upload functionality
// [x] - complete the primary actions funtions
// [x] - complete the secondary actions with input fields and buttons
// [x] - enable footer feature
// [ ] - add save contact functionality which will save the contact information in the .vcf format
//  [x] - add featured section feature in which user can add mutliple sections on button click