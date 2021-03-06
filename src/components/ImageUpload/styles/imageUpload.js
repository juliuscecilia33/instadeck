import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 65%;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.feedBody};
  border-top: 1px solid ${({ theme }) => theme.border};
  transition: 0.5s ease all;
`;

export const Contain = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InputStuff = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  input + label {
    width: 13.28125vw;
    height: 65%;
    font-size: 1vw;
    /* 20px */
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    padding: 0.625rem 1.25rem;
    /* 10px 20px */
    color: #f1e5e6;
    background-color: ${({ theme }) => theme.upload};
    border-radius: 10px;
    transition: 0.5s all ease;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .no-js input + label {
    display: none;
  }

  input:focus + label,
  input.has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }

  input:focus + label,
  input.has-focus + label,
  input + label:hover {
    background-color: ${({ theme }) => theme.uploadHover};
  }

  input + label svg {
    width: 1.25vw;
    height: auto;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    /* 4px */
    margin-right: 0.25em;
    /* 4px */
  }
`;

export const CaptionInput = styled.input`
  width: 12.28125vw;
  height: 57%;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.searchBackground};
  border: ${({ theme }) => theme.searchBorder};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  color: ${({ theme }) => theme.text};

  transition: 0.5s ease all;

  &:focus {
    border: 1.5px solid #e45257;
  }

  &::placeholder {
    font-size: 12px;
    color: #c4c4c4;
  }

  &::-ms-value {
    font-size: 12px;
    font-weight: 500;
    color: #000000;
  }
`;

export const Progress = styled.progress`
  &[value] {
    appearance: none;

    width: 25%;
    height: 25%;
  }

  &[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  &[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #e45257, #e45257);

    border-radius: 10px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
    animation: animate-stripes 5s linear infinite;
  }

  @-webkit-keyframes animate-stripes {
    100% {
      background-position: -100px 0px;
    }
  }

  @keyframes animate-stripes {
    100% {
      background-position: -100px 0px;
    }
  }
`;

export const PostButton = styled.button`
  width: 8.28125vw;
  height: 65%;
  font-size: 1vw;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  outline: none;
  padding: 0.625rem 1.25rem;
  /* 10px 20px */
  color: #f1e5e6;
  background-color: #e45257;
  border-radius: 10px;
  transition: 0.5s all ease;
  border: none;
  outline: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: #722040;
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: default;
  }
`;
