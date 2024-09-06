import { AccordionComponent } from "@/components/features/AllMachineRoundQuestions/Medium/Accordian";
import { Inter } from "next/font/google";
// import { HomeComponent } from "@/components/Home";
// import CommonComponent from "@/components/common";
// import { AboutComponent } from "@/components/features/About";
import { createContext, useState } from "react";
// import Contact from "@/components/features/Contact";
// import Counter from "@/components/Home/Counter";
// import BoxColourChange from "@/components/features/MachineROund/01";
// import PDFReaderHomePage from "@/components/features/Home";
// import { ToDoListComponent } from "@/components/features/AllMachineRoundQuestions/Basic/ToDoList";
// import { CounterComponent } from "@/components/features/AllMachineRoundQuestions/Basic/Counter";
// import { FormSubmitComponent } from "@/components/features/AllMachineRoundQuestions/Basic/FormSubmit";
// import { SortStaticList } from "@/components/features/AllMachineRoundQuestions/Basic/SortList";
// import { ToggleButton } from "@/components/features/AllMachineRoundQuestions/Basic/ToggleButton";
// import { ToDoListUseLocalStorage } from "@/components/features/AllMachineRoundQuestions/Medium/ToDoListWithLocalStorge";

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
          {/* <SortStaticList /> */}
          {/* <ToggleButton /> */}
          {/* <ToDoListUseLocalStorage /> */}
          <AccordionComponent />
        </Newcontext.Provider>
      </div>
    </>
  );
}

export { Newcontext };
