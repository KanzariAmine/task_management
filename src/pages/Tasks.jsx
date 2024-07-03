/* eslint-disable import/no-unresolved */
import { tasks } from '@assets/data';
import BoardView from '@components/BoardView';
import Button from '@components/Button';
import Loading from '@components/Loader';
import Table from '@components/Table';
import Tabs from '@components/Tabs';
import TaskTitle from '@components/TaskTitle';
import Title from '@components/Title';
import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdGridView, MdList } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { TASK_TYPE } from '../utils';

const TABS = [
  { title: 'Board View', icon: <MdGridView /> },
  { title: 'List View', icon: <MdList /> },
];

const Tasks = () => {
  const params = useParams();
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const status = params?.status || '';
  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full ">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : 'Tasks'} />
        {!status && (
          <Button
            label="Create Task"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
          />
        )}
      </div>
      <div>
        <Tabs tabs={TABS} setSelected={setSelected}>
          {!status && (
            <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
              <TaskTitle label="To Do" className={TASK_TYPE.todo} />
              <TaskTitle label="In Progress" className={TASK_TYPE['in progress']} />
              <TaskTitle label="completed" className={TASK_TYPE.completed} />
            </div>
          )}
          {selected === 0 ? <BoardView tasks={tasks} /> : <Table tasks={tasks} />}
        </Tabs>
      </div>
    </div>
  );
};

export default Tasks;
