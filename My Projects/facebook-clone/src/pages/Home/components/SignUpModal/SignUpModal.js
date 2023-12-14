import Modal from '../../../../components/Modal';
import Close from '../../../../assets/images/close.png';
import classNames from 'classnames';
import TextInput from '../../../../components/TextInput';
import DropDown from '../../../../components/DropDown';
import { useReducer } from 'react';
import { GoQuestion } from 'react-icons/go';
import MultiRadio from '../../../../components/MultiRadio';
import './SignUpModal.css';
import { produce } from 'immer';

const FIRST_NAME = 'firstName';
const SURNAME = 'surName';
const MOBILE_NUMBER_EMAIL = 'mobileNumberEmail';
const NEW_PASSWORD = 'newPassword';
const DATE_OF_BIRTH = 'dateOfBirth';
const MONTH = 'month';
const YEAR = 'year';
const GENDER = 'gender';
const PRONOUN = 'pronoun';
const GENDER_OPTIONAL = 'genderOptional';

const reducer = (state, action) => {
  state[action?.type] = action?.payload;
  return;
};

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

  const [state, dispatch] = useReducer(produce(reducer), {
    [FIRST_NAME]: '',
    [SURNAME]: '',
    [MOBILE_NUMBER_EMAIL]: '',
    [NEW_PASSWORD]: '',
    [DATE_OF_BIRTH]: '',
    [MONTH]: '',
    [YEAR]: '',
    [GENDER]: '',
    [PRONOUN]: '',
    [GENDER_OPTIONAL]: '',
  });

  const showPronounSection = state.gender === 'custom';

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

  const getFieldValue = (id) => {
    return state?.[id];
  };

  const setFieldValue = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  const handleSubmit = (event = undefined) => {
    if (event) {
      event.preventDefault();
    }
    console.log('form submitted', state);
  };

  console.log('state value', state);
  console.log('dob value', state?.[DATE_OF_BIRTH]);

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
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
                value={getFieldValue(FIRST_NAME)}
                onChange={(event) =>
                  setFieldValue(FIRST_NAME, event.target.value)
                }
              />
              <TextInput
                className={inputClassNames}
                type="text"
                placeholder="Surname"
                value={getFieldValue(SURNAME)}
                onChange={(event) => setFieldValue(SURNAME, event.target.value)}
              />
            </div>
            <TextInput
              className={inputClassNames + ' w-full mb-3'}
              type="text"
              placeholder="Mobile number or email address"
              value={getFieldValue(MOBILE_NUMBER_EMAIL)}
              onChange={(event) =>
                setFieldValue(MOBILE_NUMBER_EMAIL, event.target.value)
              }
            />
            <TextInput
              className={inputClassNames + ' w-full mb-3'}
              type="password"
              placeholder="New password"
              value={getFieldValue(NEW_PASSWORD)}
              onChange={(event) =>
                setFieldValue(NEW_PASSWORD, event.target.value)
              }
            />
            <div className="horizontal-align justify-start items-center font-secondary text-[12px] text-[#606770]">
              Date of birth
              <GoQuestion
                className="ml-1 cursor-pointer"
                title="Click for more information"
              />
            </div>
            <div className="horizontal-align mb-3 justify-between">
              <DropDown
                className={dropDownClassNames}
                id={DATE_OF_BIRTH}
                options={dateOfBirthOptions}
                selected={getFieldValue(DATE_OF_BIRTH)}
                onChange={(value) => setFieldValue(DATE_OF_BIRTH, value)}
              />
              <DropDown
                className={dropDownClassNames}
                id={MONTH}
                options={monthOptions}
                selected={getFieldValue(MONTH)}
                onChange={(value) => setFieldValue(MONTH, value)}
              />
              <DropDown
                className={dropDownClassNames}
                id={YEAR}
                options={yearOptions}
                selected={getFieldValue(YEAR)}
                onChange={(value) => setFieldValue(YEAR, value)}
              />
            </div>
            <div className="horizontal-align justify-start items-center font-secondary text-[12px] text-[#606770]">
              Gender
              <GoQuestion
                className="ml-1 cursor-pointer bg-red"
                title="Click for more information"
              />
            </div>
            <div className="mb-3">
              <MultiRadio
                className={radioClassNames}
                id={GENDER}
                options={radioOpions}
                value={getFieldValue(GENDER)}
                onChange={(value) => setFieldValue(GENDER, value)}
              />
            </div>
            {showPronounSection && (
              <>
                <DropDown
                  className={dropDownClassNames + ' w-full'}
                  id={PRONOUN}
                  options={pronounOptions}
                  selected={getFieldValue(PRONOUN)}
                  onChange={(value) => setFieldValue(PRONOUN, value)}
                  placeholder="Select your pronoun"
                />
                <p className="mt-1 mb-2 text-[12px] text-[#606770]">
                  Your pronoun is visible to everyone.
                </p>
                <TextInput
                  className={inputClassNames + ' w-full mb-3'}
                  type="text"
                  placeholder="Gender (optional)"
                  value={getFieldValue(GENDER_OPTIONAL)}
                  onChange={(event) =>
                    setFieldValue(GENDER_OPTIONAL, event.target.value)
                  }
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
              and{' '}
              <a href="cookies" className={anchorClassNames}>
                Cookies Policy.{' '}
              </a>
              You may receive SMS notifications from us and can opt out at any
              time.
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={handleSubmit}
                className="text-[#fff] text-[18px] font-bold font-secondary w-[194px] h-[36px] bg-green px-[32px] rounded-[6px] border-green"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default SignUpModal;
