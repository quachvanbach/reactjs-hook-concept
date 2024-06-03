import React, {useState} from 'react';

const teachers = [
    {
        id: 1,
        name: "Elizabeth"
    },
    {
        id: 2,
        name: "Emily"
    },
    {
        id: 3,
        name: "Mark"
    },
    {
        id: 4,
        name: "Christopher"
    }
]

const courses = [
    {
        id: 1,
        name: "HTML CSS"
    },
    {
        id: 2,
        name: "Javascript"
    },
    {
        id: 3,
        name: "ReactJS"
    },
    {
        id: 4,
        name: "Java"
    }
]


const ExampleUseState6 = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [teacherChecked, setTeacherChecked] = useState();

    const [coursesChecked, setCoursesChecked] = useState([]);

    const [student, setStudent] = useState(null)
    const studentInfo = {
        name: name === '' ? 'Không có tên!' : name,
        email: email === '' ? 'Không có email!' : email,
        teacher: teacherChecked ? teachers.find(course => course.id === teacherChecked).name : "Chưa đăng ký!",
        coursesName: coursesChecked.length > 0
            ? courses.filter(course => coursesChecked.includes(course.id)).map(course => course.name).join(", ")
            : "Chưa đăng ký!"
    }

    const handleCoursesCheck = (id) => {
        setCoursesChecked(prev => {
            const isChecked = coursesChecked.includes(id);
            if (isChecked) {
                return coursesChecked.filter(item => item !== id);
            } else {
                return [...prev, id]
            }
        });
    }

    const handleRegister = () => {
        setStudent(studentInfo)
    }

    return (
        <div className='example'>
            <h1>Example 6: Two-way binding trong React</h1>
            <label htmlFor="name">Name: </label>
            <input id='name' value={name} onChange={e => setName(e.target.value)}/>
            <label htmlFor="email">Email: </label>
            <input id='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <p>Course:</p>
            {teachers.map((teacher) => (
                <div key={teacher.id}>
                    <input type="radio" checked={teacherChecked === teacher.id}
                           onChange={() => setTeacherChecked(teacher.id)}/> {teacher.name}
                </div>
            ))}

            {courses.map((course) => (
                <div key={course.id}>
                    <input type="checkbox" checked={coursesChecked.includes(course.id)}
                           onChange={() => {
                               handleCoursesCheck(course.id)
                           }}/> {course.name}
                </div>
            ))}

            <button onClick={handleRegister}>Register</button>
            {student && (
                <div>
                    <ul>Thông tin đăng ký khoá học:
                        <li>Tên: {student.name}</li>
                        <li>Email: {student.email}</li>
                        <li>Giáo viên: {student.teacher}</li>
                        <li>Khoá học: {student.coursesName}</li>
                    </ul>
                </div>
            )
            }
        </div>
    )
        ;
};

export default ExampleUseState6;