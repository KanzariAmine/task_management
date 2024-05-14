/* eslint-disable import/no-unresolved */

import Button from '@components/Button';
import Dropdowns from '@components/Dropdowns';
import Textbox from '@components/Textbox';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  console.log('USER', user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    user && navigate('/dashboard');
  }, [user]);
  const submitHandler = async (data) => {
    console.log('Submit handler', data);
  };
  const { t } = useTranslation();
  return (
    <>
      <div className="relative h-16">
        <Dropdowns />
      </div>

      <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-main">
        <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
          {/* Left Side */}
          <div className="w-full h-full lg:w-2/3 flex flex-col items-center justify-center">
            <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
              <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
                {t('app_title')}
              </span>
              <p className=" flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
                <span>Cloud-Based</span>
                <span>Task Manager</span>
              </p>
              <div className="cell">
                <div className="circle rotate-in-up-left"></div>
              </div>
            </div>
          </div>

          {/* Right Side  */}
          <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
            <form
              className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div>
                <p className="text-blue-600 text-3xl font-bold text-center ">{t('welcome_msg')}</p>
                <p className="text-center text-base text-gray-700">{t('app_description')}</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <Textbox
                  placeholder="email@exemple.com"
                  type="email"
                  name="email"
                  label={t('email')}
                  className="w-full rounded-full"
                  register={register('email', { required: 'Adresse e-mail requise' })} //Check this with I18
                  error={errors.email ? errors.email.message : ''}
                />
                <Textbox
                  placeholder={t('placeholder_password')}
                  type="password"
                  name="password"
                  label={t('password')}
                  className="w-full rounded-full"
                  register={register('password', { required: 'Password is required' })} //Check this with I18n
                  error={errors.password ? errors.password.message : ''}
                />
                <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                  {t('forget_password')}
                </span>
                <Button
                  type="submit"
                  label={t('login_btn')}
                  className="w-full h-10 bg-blue-700 text-white rounded-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
