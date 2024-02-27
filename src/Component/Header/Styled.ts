import styled from "styled-components"

const HeaderContainer = styled.section`

    .main-header{
        display: flex;
        flex-direction: column;
        color: white;   
    }

    // header-1 all css //
    
    .header-1{
        background: rgba(10, 3, 4, 1);
    }

    .sub-header-1{
        margin-left: 35px;
        margin-right: 0px;
    }
    .sub-header-1 .nav-list{
        justify-content: space-between;
        // align-items: center;
        list-style: none;
    }
    .head1-box-3{
        flex: 0 0 18%;
    }

    // header-2 all css //

    .header-2{
        background:rgba(233, 177, 89, 1);
    }
    .sub-header-2{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .search-box{
        width: 600px;
        height: 48px;
        padding: 20px;
        color: white;
        background-color: transparent;
        border: 2px solid white ;
        border-radius: 8px;
    }
    input:focus{
        outline: none;
    }
    ::placeholder{
        color: white;
    }
    .header-icons{
        display: flex;
        justify-content: space-evenly;
        width: 300px;
    }
    .header-icons .icon-link{
        text-decoration: none;
        color: #FFFFFF;   
        justify-content: space-evenly;
    }

    // sub-header-3 //
    
    
    
`


export default HeaderContainer;