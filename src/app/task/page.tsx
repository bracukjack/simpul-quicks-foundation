"use client";
import AppButton from "@/component/ButtonComponent";
import {
  ArrowDownIcon,
  CheckBoxIcon,
  ClockIcon,
  MoreIcon,
  PencilIcon,
  SaveIcon,
} from "@/component/CustomIconComponents";
import DateInput from "@/component/DateInputComponent";
import Loading from "@/component/LoadingComponent";
import SelectInput from "@/component/SelectInputComponent";
import TextInput from "@/component/TypeBarComponent";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { tasks } from "./data";
import {
  calculateDaysDiff,
  formatDate,
  formatDayDate,
} from "@/utils/DateFormat";
import TextArea from "@/component/TestAreaComponent";
import MultiSelect from "@/component/MultiSelectComponent";

const Task = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [openMultiSelectForTask, setOpenMultiSelectForTask] = useState<
    string | null
  >(null);

  const optionsData = [
    { value: "Important ASAP", color: "#E9F3FF" },
    { value: "Offline Meeting", color: "#FDCFA4" },
    { value: "Virtual Meeting", color: "#F9E9C3" },
    { value: "ASAP", color: "#F9E9C3" },
    { value: "Client Related", color: "#AFEBDB" },
    { value: "Self Task", color: "#CBF1C2" },
    { value: "Appointments", color: "#CFCEF9" },
    { value: "Court Related", color: "#F9E0FD" },
  ];

  const handleSaveIconClick = (taskId: string) => {
    setOpenMultiSelectForTask((prevTaskId) =>
      prevTaskId === taskId ? null : taskId,
    );
  };

  const handleCheckboxChange = (taskId: number) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  const toggleContent = (taskId: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
  };

  const data = tasks;
  const handleOptionChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  const options = [
    { value: "All", label: "All" },
    { value: "Urgent To Do", label: "Urgent To Do" },
    { value: "Personal Errands", label: "Personal Errands" },
  ];

  return (
    <div className="px-8 py-6 text-black">
      <div className="min-h-96 h-128 overflow-y-scroll">
        {isLoading && <Loading />}

        {!isLoading && (
          <div className="flex w-full flex-col">
            <div className="flex w-full justify-between">
              <SelectInput
                value={selectedOption}
                onChange={handleOptionChange}
                placeholder="My Task"
                options={options}
              />

              <AppButton label="New Task" color="primary" />
            </div>

            {data.map((task, index) => (
              <div
                key={index}
                className="mt-5 flex items-start justify-between gap-x-5 border-b pb-8"
              >
                <input
                  type="checkbox"
                  className="form-checkbox text-PriBlue h-5 w-5"
                  checked={completedTasks.includes(task.id)}
                  onChange={() => handleCheckboxChange(task.id)}
                />

                <div className="flex w-full flex-col">
                  <div className="flex w-full items-start justify-between">
                    <p
                      className={`text-PriSilver w-full font-semibold ${
                        completedTasks.includes(task.id) ? "line-through" : ""
                      }`}
                    >
                      {task.title}
                    </p>

                    <div className="lg:text-md flex w-full text-xs">
                      <div className="flex w-full items-start justify-end gap-x-2">
                        <p className="text-IndRed">
                          {calculateDaysDiff(task.date)}
                        </p>
                        <p className="text-PriSilver">
                          {formatDayDate(task.date)}
                        </p>
                        <KeyboardArrowDown
                          onClick={() => toggleContent(task.id)}
                          className={`text-PriSilver ${
                            isOpen[task.id] && "rotate-180"
                          }`}
                        />
                        <MoreIcon className="fill-PriSilver h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {isOpen[task.id] && (
                    <div className="flex flex-col gap-0">
                      <div className="flex items-center gap-x-2">
                        <ClockIcon className="fill-PriBlue h-5 w-5" />
                        <DateInput
                          label={""}
                          value={task.date}
                          onChange={function (newValue: string): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      </div>

                      <div className="flex items-center gap-x-2">
                        <PencilIcon className="fill-PriBlue h-5 w-5" />
                        <p>{task.description}</p>
                      </div>

                      <div className="mt-2 flex items-center gap-x-5 rounded-md bg-gray-50 px-2 py-3">
                        <SaveIcon
                          className="fill-PriBlue h-5 w-5"
                          onClick={() =>
                            handleSaveIconClick(task.id.toString())
                          }
                        />
                        <div className="flex flex-wrap gap-2">
                          {openMultiSelectForTask === task.id.toString() && (
                            <MultiSelect options={optionsData} />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Task;
