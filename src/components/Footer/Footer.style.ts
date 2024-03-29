import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flex}
    position: relative;

    width: 100%;
    height: 330px;
    margin-top: 50px;

    background-color: ${({ theme }) => theme.palette.secondary};

    .box {
        ${mixins.flexCol};
        justify-content: center;

        width: 100%;

        font-family: ${({ theme }) => theme.font.family.ubuntu};
        box-shadow: 0 0 20px -2px ${({ theme }) => theme.palette.shadow};

        @media ${({ theme }) => theme.device.tablet} {
            flex-direction: row;
        }

        @media ${({ theme }) => theme.device.desktop} {
            width: 80%;
        }

        a {
            color: ${({ theme }) => theme.palette.dominant};

            transition: color 0.15s ease-in-out;

            &:hover {
                color: ${({ theme }) => theme.palette.accent};
            }
        }

        .icons {
            position: absolute;
            top: 10px;

            ${mixins.flex};
            justify-content: space-between;

            width: 95%;

            @media ${({ theme }) => theme.device.tablet} {
                position: static;
            }

            @media ${({ theme }) => theme.device.laptop} {
                width: 50%;
            }

            .logo {
                @media ${({ theme }) => theme.device.tablet} {
                    width: 140px;
                    height: 140px;

                    margin-left: 10px;
                }
            }

            .socials {
                ${mixins.flex};
                justify-content: space-evenly;
                flex-wrap: wrap;
                width: 50%;

                a {
                    font-size: ${({ theme }) => theme.font.size.l};

                    @media ${({ theme }) => theme.device.tablet} {
                        flex: 50%;
                        padding: 10px;
                    }
                }
            }
        }

        .info {
            ${mixins.flexRow};
            justify-content: space-between;
            align-items: flex-start;

            width: 100%;
            margin-top: 20px;

            font-family: ${({ theme }) => theme.font.family.ubuntu};
            color: ${({ theme }) => theme.palette.dominant};

            ul {
                list-style-type: none;
            }

            .links-wrapper,
            .address-wrapper {
                ${mixins.flexCol};
                flex: 1;

                .header {
                    font-size: ${({ theme }) => theme.font.size.s};
                    color: ${({ theme }) => theme.palette.accent};

                    margin-bottom: 5px;

                    @media ${({ theme }) => theme.device.desktop} {
                        font-size: ${({ theme }) => theme.font.size.m};
                    }
                }

                ul {
                    li {
                        padding-bottom: 5px;

                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .email {
                        color: ${({ theme }) => theme.palette.accent};
                    }
                }
            }

            .links-wrapper {
                align-items: flex-start;
                margin-left: 30px;

                @media ${({ theme }) => theme.device.laptop} {
                    align-items: center;
                }

                .header {
                    span {
                        padding-right: 10px;
                    }
                }
            }

            .address-wrapper {
                align-items: flex-end;
                margin-right: 30px;

                @media ${({ theme }) => theme.device.laptop} {
                    align-items: center;
                }

                .header {
                    ${mixins.flex};
                    justify-content: flex-end;

                    @media ${({ theme }) => theme.device.tablet} {
                        justify-content: flex-start;
                    }

                    span {
                        padding-left: 10px;
                        order: 2;

                        @media ${({ theme }) => theme.device.tablet} {
                            padding-left: 0;
                            padding-right: 10px;
                            order: 1;
                        }
                    }

                    .icon {
                        order: 1;

                        @media ${({ theme }) => theme.device.tablet} {
                            order: 2;
                        }
                    }
                }

                ul li {
                    text-align: right;

                    @media ${({ theme }) => theme.device.tablet} {
                        text-align: left;
                    }
                }
            }
        }
    }

    .copyright {
        position: absolute;
        bottom: 0;
        ${mixins.flex};

        width: 100%;
        height: 40px;

        font-size: ${({ theme }) => theme.font.size.xs};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.accent};
        color: ${({ theme }) => theme.palette.secondary};

        box-shadow: 0 0 20px -2px ${({ theme }) => theme.palette.shadow};
    }
`;
