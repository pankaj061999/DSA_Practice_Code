import { Inter } from "next/font/google";
import { HomeComponent } from "@/components/Home";
import CommonComponent from "@/components/common";
import { AboutComponent } from "@/components/features/About";
import { createContext, useState } from "react";
import Contact from "@/components/features/Contact";
import Counter from "@/components/Home/Counter";
import BoxColourChange from "@/components/features/MachineROund/01";
import PDFReaderHomePage from "@/components/features/Home";
import { ToDoListComponent } from "@/components/features/AllMachineRoundQuestions/ToDoList";
import { CounterComponent } from "@/components/features/AllMachineRoundQuestions/Counter";
import { FormSubmitComponent } from "@/components/features/AllMachineRoundQuestions/FormSubmit";
import { SortStaticList } from "@/components/features/AllMachineRoundQuestions/SortList";

const Newcontext = createContext(null);

export default function Home() {
  const [name, setName] = useState("Pankaj Kumar Meena");

  const handleUpdateName = () => {
    setName("hey user");
  };

  const user = { name: "Pankaj Kumar Meena From Rajasthan", age: 30 };

  return (
    <>
      <div>
        <Newcontext.Provider value={user}>
          {/* <HomeComponent /> */}
          {/* <CommonComponent /> */}
          {/* <AboutComponent data={name} handleUpdateName={handleUpdateName} setName={setName} /> */}
          {/* <Contact /> */}
          {/* <Counter /> */}
          {/* <BoxColourChange /> */}
          {/* <PDFReaderHomePage /> */}
          {/* <ToDoListComponent /> */}
          {/* <CounterComponent /> */}
          {/* <FormSubmitComponent /> */}
          <SortStaticList />
        </Newcontext.Provider>
      </div>
    </>
  );
}

export { Newcontext };
