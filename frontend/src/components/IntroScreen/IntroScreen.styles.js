import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 76px);
  width: 100%;
  background-color: #222; /* Ekran görüntüsündeki koyu arka plan */
`;

export const IntroCard = styled.div`
  background-color: #fbdca9; /* Pastel turuncu/krem rengi */
  width: 380px;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AvatarWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const Name = styled.h1`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 4px;
`;

export const Role = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const FollowText = styled.a`
  font-size: 12px;
  color: #ff5e5e;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 80px;
`;

export const QueryText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const EnterButton = styled.button`
  background-color: #fff;
  color: #000;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 20px;
  border: 1px solid #000;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
