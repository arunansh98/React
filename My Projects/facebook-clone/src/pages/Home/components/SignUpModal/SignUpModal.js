import Modal from '../../../../components/Modal';
import Close from '../../../../assets/images/close.png';
import classNames from 'classnames';
import TextInput from '../../../../components/TextInput';
import DropDown from '../../../../components/DropDown';
import { useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import MultiRadio from '../../../../components/MultiRadio';
import './SignUpModal.css';

function SignUpModal({ onClose }) {
  const inputClassNames = classNames(
    'rounded-[5px] w-[194px] h-[40px] p-[11px] font-secondary',
    'border bg-[#f5f6f7]',
    'focus-within:outline-none'
  );

  const dropDownClassNames = classNames(
    'horizontal-align border items-center font-secondary',
    'w-[125px] h-[36px] justify-between rounded-[5px]'
  );

  const radioClassNames = classNames(
    'horizontal-align border items-center font-secondary',
    'w-[125px] h-[36px] justify-between rounded-[5px] px-[10px]'
  );

  const anchorClassNames = classNames('text-[#385898] no-underline');

  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState(undefined);

  const [selectedMonth, setSelectedMonth] = useState(undefined);

  const [selectedYear, setSelectedYear] = useState(undefined);

  const [selectedGender, setSelectedGender] = useState(undefined);

  const [selectedPronoun, setSelectedPronoun] = useState(undefined);

  const showPronounSection = selectedGender === 'custom';

  const dateOfBirthOptions = Array(31)
    .fill('')
    .map((_item, index) => {
      return { key: index + 1, label: index + 1 };
    });

  const monthOptions = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString('en', {
      month: 'short',
    });
  }).map((month, index) => {
    return {
      label: month,
      key: index,
    };
  });

  const yearOptions = Array(119)
    .fill('')
    .map((_item, index) => {
      return { key: index + 1, label: 2023 - parseInt(index) };
    });

  const radioOpions = [
    {
      key: 'female',
      label: 'Female',
    },
    {
      key: 'male',
      label: 'Male',
    },
    {
      key: 'custom',
      label: 'Custom',
    },
  ];

  const pronounOptions = [
    {
      key: 'she',
      label: `She : "Wish her a happy birthday!"`,
    },
    {
      key: 'he',
      label: `He : "Wish him a happy birthday!"`,
    },
    {
      key: 'they',
      label: `They : "Wish them a happy birthday!"`,
    },
  ];

  return (
    <Modal>
      <div className="vertical-align">
        <div className="horizontal-align justify-between items-center px-3">
          <h1 className="font-bold font-secondary text-[32px] text-black">
            Sign Up
          </h1>
          <img src={Close} alt="close" onClick={onClose} />
        </div>
        <div className="text-[15px] text-[#606770] font-secondary px-3">
          Its quick and easy.
        </div>
        <hr className="mt-2" />
        <div className="p-[16px]">
          <div className=" horizontal-align mb-3">
            <TextInput
              className={inputClassNames + ' mr-2'}
              type="text"
              placeholder="First Name"
            />
            <TextInput
              className={inputClassNames}
              type="text"
              placeholder="Surname"
            />
          </div>
          <TextInput
            className={inputClassNames + ' w-full mb-3'}
            type="text"
            placeholder="Mobile number or email address"
          />
          <TextInput
            className={inputClassNames + ' w-full mb-3'}
            type="password"
            placeholder="New password"
          />
          <div className="horizontal-align justify-start items-center font-secondary text-[12px] text-[#606770]">
            Date of birth
            <GoQuestion className="ml-1" />
          </div>
          <div className="horizontal-align mb-3 justify-between">
            <DropDown
              className={dropDownClassNames}
              label="Date of birth"
              options={dateOfBirthOptions}
              selected={selectedDateOfBirth}
              onChange={setSelectedDateOfBirth}
            />
            <DropDown
              className={dropDownClassNames}
              options={monthOptions}
              selected={selectedMonth}
              onChange={setSelectedMonth}
            />
            <DropDown
              className={dropDownClassNames}
              options={yearOptions}
              selected={selectedYear}
              onChange={setSelectedYear}
            />
          </div>
          <div className="horizontal-align justify-start items-center font-secondary text-[12px] text-[#606770]">
            Gender
            <GoQuestion className="ml-1" />
          </div>
          <div className="mb-3">
            <MultiRadio
              className={radioClassNames}
              options={radioOpions}
              value={selectedGender}
              onChange={setSelectedGender}
            />
          </div>
          {showPronounSection && (
            <>
              <DropDown
                className={dropDownClassNames + ' w-full'}
                options={pronounOptions}
                selected={selectedPronoun}
                onChange={setSelectedPronoun}
                placeholder="Select your pronoun"
              />
              <p className="mt-1 mb-2 text-[12px] text-[#606770]">
                Your pronoun is visible to everyone.
              </p>
              <TextInput
                className={inputClassNames + ' w-full mb-3'}
                type="text"
                placeholder="Gender (optional)"
              />
            </>
          )}{' '}
          <p className="text-[11px] text-[#777]">
            People who use our service may have uploaded your contact
            information to Facebook. <a href="learn more">Learn more</a>
          </p>
          <p className="text-[11px] text-[#777] my-[11px]">
            By clicking Sign Up, you agree to our
            <a href="terms" className={anchorClassNames}>
              {' '}
              Terms,{' '}
            </a>
            <a href="privacy" className={anchorClassNames}>
              Privacy Policy{' '}
            </a>
            and <a href="cookies">Cookies Policy. </a>You may receive SMS
            notifications from us and can opt out at any time.
          </p>
          <div className="flex justify-center items-center">
            <button className="text-[#fff] text-[18px] font-bold font-secondary w-[194px] h-[36px] bg-green px-[32px] rounded-[6px] border-green">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;
