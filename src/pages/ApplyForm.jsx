import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Page = styled.div`
  background-color: #000;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 48px;
  position: relative;
  font-family: 'Pretendard', sans-serif;
`;

const BackButton = styled.button`
  position: absolute;
  top: 40px;
  left: 60px;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const Required = styled.span`
  color: #ff7c7c;
  font-size: 18px;
  margin-left: 2px;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;
  background-color: #000;
  border: 1.5px solid ${({ $filled }) => ($filled ? '#19d0a3' : '#555')};
  border-radius: 8px;
  padding: 0 20px;
  color: #fff;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: #555;
  }

  &:focus {
    border-color: #19d0a3;
  }
`;

const ChoiceGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const ChoiceButton = styled.button`
  flex: 1;
  height: 52px;
  background-color: ${({ $selected }) => ($selected ? '#19d0a3' : '#000')};
  border: 1.5px solid ${({ $selected }) => ($selected ? '#19d0a3' : '#555')};
  border-radius: 8px;
  color: ${({ $selected }) => ($selected ? '#000' : '#757575')};
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    border-color: #19d0a3;
    color: ${({ $selected }) => ($selected ? '#000' : '#fff')};
  }
`;

const NextButton = styled.button`
  width: 100%;
  max-width: 800px;
  height: 56px;
  margin-top: 48px;
  background-color: ${({ $active }) => ($active ? '#19d0a3' : '#757575')};
  border: none;
  border-radius: 8px;
  color: ${({ $active }) => ($active ? '#000' : '#fff')};
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  cursor: ${({ $active }) => ($active ? 'pointer' : 'default')};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#14b991' : '#757575')};
  }
`;

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: '',
    studentId: '',
    phone: '',
    dormitory: null,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDormitory = (value) => {
    setForm({ ...form, dormitory: value });
  };

  const isAllFilled = !!form.name && !!form.studentId && !!form.phone && form.dormitory !== null;

  return (
    <Page>
      <BackButton onClick={() => navigate(-1)} aria-label="뒤로가기">
        &#8249;
      </BackButton>

      <FormContainer>
        <Field>
          <Label>이름<Required>*</Required></Label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름을 입력해 주세요"
            $filled={!!form.name}
          />
        </Field>

        <Field>
          <Label>학번<Required>*</Required></Label>
          <Input
            type="text"
            name="studentId"
            value={form.studentId}
            onChange={handleChange}
            placeholder="학번을 입력해 주세요"
            $filled={!!form.studentId}
          />
        </Field>

        <Field>
          <Label>전화번호<Required>*</Required></Label>
          <Input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="전화번호를 입력해 주세요"
            $filled={!!form.phone}
          />
        </Field>

        <Field>
          <Label>기숙사 여부<Required>*</Required></Label>
          <ChoiceGroup>
            <ChoiceButton
              type="button"
              $selected={form.dormitory === true}
              onClick={() => handleDormitory(true)}
            >
              예
            </ChoiceButton>
            <ChoiceButton
              type="button"
              $selected={form.dormitory === false}
              onClick={() => handleDormitory(false)}
            >
              아니요
            </ChoiceButton>
          </ChoiceGroup>
        </Field>
      </FormContainer>

      <NextButton
        type="button"
        $active={isAllFilled}
        onClick={() => {
          if (!isAllFilled) return
          navigate(form.dormitory ? '/apply/yes-dorm' : '/apply/no-dorm')
        }}
      >
        다음
      </NextButton>
    </Page>
  );
}
