/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #74cdf7;
}
.container{
  width: 450px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}
.container h2{
  font-weight: 600;
  font-size: 1.31rem;
  padding: 1rem 1.75rem;
  border-bottom: 1px solid #d4dbe5;
}
.wrapper{
  margin: 1.25rem 1.75rem;
}
.wrapper .input-box{
  position: relative;
}
.input-box input{
  width: 100%;
  height: 53px;
  color: #000;
  background: none;
  font-size: 1.06rem;
  font-weight: 500;
  border-radius: 4px;
  letter-spacing: 1.4px;
  border: 1px solid #aaa;
  padding: 0 2.85rem 0 1rem;
}
.input-box span{
  position: absolute;
  right: 13px;
  cursor: pointer;
  line-height: 53px;
  color: #707070;
}
.input-box span:hover{
  color: #4285F4!important;
}
.wrapper .pass-indicator{
  width: 100%;
  height: 4px;
  position: relative;
  background: #dfdfdf;
  margin-top: 0.75rem;
  border-radius: 25px;
}
.pass-indicator::before{
  position: absolute;
  content: "";
  height: 100%;
  width: 50%;
  border-radius: inherit;
  transition: width 0.3s ease;
}
.pass-indicator#weak::before{
  width: 20%;
  background: #E64A4A;
}
.pass-indicator#medium::before{
  width: 50%;
  background: #f1c80b;
}
.pass-indicator#strong::before{
  width: 100%;
  background: #4285F4;
}
.wrapper .pass-length{
  margin: 1.56rem 0 1.25rem;
}
.pass-length .details{
  display: flex;
  justify-content: space-between;
}
.pass-length input{
  width: 100%;
  height: 5px;
}
.pass-settings .options{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.pass-settings .options .option{
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: calc(100% / 2);
}
.options .option:first-child{
  pointer-events: none;
}
.options .option:first-child input{
  opacity: 0.7;
}
.options .option input{
  height: 16px;
  width: 16px;
  cursor: pointer;
}
.options .option label{
  cursor: pointer;
  color: #4f4f4f;
  padding-left: 0.63rem;
}
.wrapper .generate-btn{
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  background: #4285F4;
  font-size: 1.06rem;
  padding: 0.94rem 0;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0.94rem 0 1.3rem;
}
