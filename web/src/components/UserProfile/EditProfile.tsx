import React from 'react';
import styled from '@emotion/styled';
import { ArrowPrev } from '@/components/icons';
import CameraIcon from '@/components/icons/CameraIcon';
import XCircleFilledIcon from '@/components/icons/XCircleFilledIcon';
import { ProfileTitle } from '.';

interface EditProfileProps {
  pageTitle: ProfileTitle;
  setPageTitle: React.Dispatch<React.SetStateAction<ProfileTitle>>;
}

const EditProfile = ({ pageTitle, setPageTitle }: EditProfileProps) => {
  const [nickname, setNickname] = React.useState('');

  const initializeNickname = () => {
    setNickname('');
  };

  return (
    <>
      <EditProfileWrapper>
        <TopHeader>
          <Title>{pageTitle}</Title>
          <ArrowPrev onClick={() => setPageTitle('프로필')} />
        </TopHeader>
        <Content>
          <ImgArea>
            <Avatar src="https://via.placeholder.com/100" />
            <BlackCircle>
              <CameraIcon />
            </BlackCircle>
          </ImgArea>
          <Row>
            <Text>닉네임</Text>
            <InputWrapper>
              <Input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              {nickname !== '' && (
                <XCircleFilledIcon onClick={initializeNickname} />
              )}
            </InputWrapper>
          </Row>
        </Content>
      </EditProfileWrapper>
      <OkBtn>확인</OkBtn>
    </>
  );
};

export default EditProfile;

const EditProfileWrapper = styled.div`
  position: relative;
`;

const TopHeader = styled.div`
  position: relative;
  padding: 14px 16px;
  margin-bottom: 20px;

  > svg {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.12rem;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgArea = styled.div`
  position: relative;
  display: inline-block;
`;

const Avatar = styled.img`
  border-radius: 8px;
`;

const BlackCircle = styled.div`
  position: absolute;
  bottom: 7px;
  right: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);

  > svg {
    position: absolute;
    right: 50%;
    top: 47%;
    width: 16px;
    height: 16px;
    transform: translate(50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;

    path {
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`;

const Row = styled.div`
  align-self: stretch;
  padding: 0 16px;
`;

const Text = styled.span`
  display: block;
  width: 100%;
  font-size: 0.87rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray800};
  margin: 40px 0 14px;
`;

const InputWrapper = styled.div`
  position: relative;

  > svg {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  background-color: ${({ theme }) => theme.color.gray100};
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.gray800};
  font-size: 0.87rem;
  padding: 14px 40px 14px 16px;
`;

const OkBtn = styled.button`
  position: absolute;
  width: calc(100% - 32px);
  bottom: 16px;
  left: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.primary500};
  border: 1px solid ${({ theme }) => theme.color.primary500};
  padding: 1rem 0;
  border-radius: 8px;
`;
