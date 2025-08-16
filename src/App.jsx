import { use } from 'react'
import './App.css'
import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: 'HTML'
  },
  {
    id: 2,
    name: 'CSS'
  },
  {
    id: 3,
    name: 'JS'
  }
]


function App() {

  const [checked, setChecked] = useState([]);
  // setChecked: Hàm cập nhật State
  // checked:   mảng chứa id của các khoá học người dùng đã tick
  console.log(checked);


  // Xử lý khi đã bấm nút submit
  const handleSubmit = () => {
    console.log({id:checked})
  }

  // Xử lý tick và untick checkbox
  const handleCheck = (id) => {
  // Nhận id của khoá học
    setChecked(prev => {
    // Dùng callback để lấy giá trị mới nhất của state checked
    // prev là state checked trước khi cập nhật
      const isCheck = checked.includes(id);
      // kiểm tra id này đã tồn tại trong mảng checked chưa
      // sử dụng checked.includes(id) để kiểm tra id
      if (isCheck) {
      // Nếu đã tồn tại id trong trong mảng đó
        return checked.filter(item => item !== id)
        // Trả về mảng lọc bỏ id đó
      } else {
        return [...prev, id]
        // Trả về mảng thêm id đó
      }
    });
  }
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <input  type='checkbox'
                  checked={checked.includes(course.id)}
                  onChange={() => handleCheck(course.id)}
          >
          </input>
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
