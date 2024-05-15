import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { FaTasks, FaTrashAlt, FaUsers } from 'react-icons/fa';
import { MdDashboard, MdOutlineAddTask, MdOutlinePendingActions, MdSettings, MdTaskAlt } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setOpenSidebar } from '../redux/slices/authSlice';

const linkData = [
  {
    label: 'dashboard',
    link: 'dashboard',
    icon: <MdDashboard />,
  },
  {
    label: 'tasks',
    link: 'tasks',
    icon: <FaTasks />,
  },
  {
    label: 'completed',
    link: 'completed/completed',
    icon: <MdTaskAlt />,
  },
  {
    label: 'in_progress',
    link: 'in-progress/in progress',
    icon: <MdOutlinePendingActions />,
  },
  {
    label: 'to_do',
    link: 'todo/todo',
    icon: <MdOutlinePendingActions />,
  },
  {
    label: 'team',
    link: 'team',
    icon: <FaUsers />,
  },
  {
    label: 'Trash',
    link: 'trashed',
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const sideBarLinks = !user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          'w-full lg-w-3/4 flex gap-2 px-3 py-2 rounded-full items-center  text-base hover:bg-button_hover hover:text-text_hover',
          path === el.link.split('/')[0] ? 'bg-blue-700 text-white' : '',
        )}
      >
        {el.icon}
        <span>{t(el.label)}</span>
      </Link>
    );
  };
  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full ">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black"> {t('task_me')} </span>
      </h1>
      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sideBarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div className="rounded-full items-center hover:bg-button_hover hover:text-text_hover">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
          <MdSettings />
          <span>{t('setting')}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
