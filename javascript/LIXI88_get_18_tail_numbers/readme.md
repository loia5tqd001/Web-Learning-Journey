## LIXI88
- Url: https://lixi88.info/home.shtml  
- Mode: Sổ xố siêu tốc  
- Desc: Get 18 tail-numbers from xo-so table  
- Query:
```javascript
Array.from(
  document.querySelectorAll(
    '.result__special td:last-child, .result__special ~ tr td:last-child'
  )
)
.map(x => x.textContent.split(' - '))
.flat()
.map(x => x.slice(-2))
.join()
```
- One-liner query
```javascript
Array.from(document.querySelectorAll('.result__special td:last-child, .result__special ~ tr td:last-child')).map(x => x.textContent.split(' - ')).flat().map(x => x.slice(-2)).join()
```
- Sample input in image:
![](./sample_input.png)
- Sample input in table:
<table>
<tbody>
<tr class="result__special">
<td class="w-20">Giải ĐB</td>
<td>235731</td>
</tr>
<tr>
<td>Giải Nhất</td>
<td>08145</td>
</tr>
<tr>
<td>Giải nhì</td>
<td>37248</td>
</tr>
<tr>
<td>Giải ba</td>
<td>07674 - 32970</td>
</tr>
<tr>
<td>Giải tư</td>
<td>68243 - 90606 - 59562 - 78634 - 03419 - 19038 - 55982</td>
</tr>
<tr>
<td>Giải năm</td>
<td>0979</td>
</tr>
<tr>
<td>Giải sáu</td>
<td>6223 - 0342 - 3799</td>
</tr>
<tr>
<td>Giải bảy</td>
<td>555</td>
</tr>
<tr>
<td>Giải tám</td>
<td>18</td>
</tr>
</tbody>
</table>

- Sample input in HTML:
```html
<table>
<tbody>
<tr class="result__special">
<td class="w-20">Giải ĐB</td>
<td>235731</td>
</tr>
<tr>
<td>Giải Nhất</td>
<td>08145</td>
</tr>
<tr>
<td>Giải nhì</td>
<td>37248</td>
</tr>
<tr>
<td>Giải ba</td>
<td>07674 - 32970</td>
</tr>
<tr>
<td>Giải tư</td>
<td>68243 - 90606 - 59562 - 78634 - 03419 - 19038 - 55982</td>
</tr>
<tr>
<td>Giải năm</td>
<td>0979</td>
</tr>
<tr>
<td>Giải sáu</td>
<td>6223 - 0342 - 3799</td>
</tr>
<tr>
<td>Giải bảy</td>
<td>555</td>
</tr>
<tr>
<td>Giải tám</td>
<td>18</td>
</tr>
</tbody>
</table>
```
- Sample output:
```javascript
31,45,48,74,70,43,06,62,34,19,38,82,79,23,42,99,55,18
```


## Google Sheets

- Query:
```
=ARRAYFORMULA(COUNTIF(SPLIT("__NUMBERS__",","),__RANGE__))
```
- Sample:
```
=ARRAYFORMULA(COUNTIF(SPLIT("84,77,62,92,98,38,38,18,32,89,37,93,79,03,66,73,92,83",","),$A2:$A101))
```
- [Link Google Sheets]

[Link Google Sheets]: https://docs.google.com/spreadsheets/d/1vC1we7zshRPYL37KyrFnzKe09B283R7ef5XRGuvKMkA/edit?usp=sharing