import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div>
      <ContactCard
        contact={{
          name: "Emmanuel Kpogo",
          imgUrl: "https://picsum.photos/200",
          phone: "0545405551",
          email: "emmakpg@yahoo.com",
          profession: "Engineer",
        }}
      />
      <ContactCard
        contact={{
          name: "Stephen Kpogo",
          imgUrl: "https://picsum.photos/200",
          phone: "0246876935",
          email: "stevequarshk@yahoo.com",
          profession: "Engineer",
        }}
      />
      <ContactCard
        contact={{
          name: "Joshua Kpogo",
          imgUrl: "https://picsum.photos/200",
          phone: "0246876935",
          email: "joshkpg@yahoo.com",
          profession: "Judicial service",
        }}
      />

      <ContactCard
        contact={{
          name: "Dorcas Kpogo",
          imgUrl: "https://picsum.photos/200",
          phone: "0240711025",
          email: "dochk@yahoo.com",
          profession: "Pharmacist",
        }}
      />
    </div>
  );
}

export default App;
