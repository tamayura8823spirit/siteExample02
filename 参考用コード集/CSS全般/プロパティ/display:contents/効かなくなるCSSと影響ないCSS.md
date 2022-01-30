
```
.contents { 
  display: contents;

  /*   OK   */
  font-weight: bold;
  color: red;
  text-decoration: underline;
  cursor: pointer;
  &::before{
    content: 'before'
  }
  &::after{
    content: 'after'
  }
  
  /*   NG   */
  background: #000;
  padding: 10px;
  margin: 10px;
  border: solid 1px #000;
  box-shadow: 2px 2px 10px #000;
  width: 10px;
}
```