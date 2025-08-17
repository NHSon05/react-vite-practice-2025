import { useEffect, useState } from "react";
// import { transform } from "typescript";

const tabs = ['posts', 'comments', 'albums']


export function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    },[type])

    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY >= 200){
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }

            // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('remove')
        }
    },[])



    return (
        <div>
            {tabs.map(tab => (
                <button key={tab}
                        style={type === tab ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {

                        }}
                        onClick={() => setType(tab)}>
                    {tab}
                </button>
            ))}
            <input
                value = {title}
                onChange = {e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button 
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    Go To Top
                </button>
            )}
        </div> 
    )
}


export function TimerFunction() {
    const [countdown, setCountDown] = useState(10)

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountDown((prevCountDown  => {
                if (prevCountDown === 0) {
                    clearInterval(timeId);
                    return 0;
                }
                return prevCountDown - 1;
            }))
        },1000)  
        return () => {
            clearInterval(timeId);
        }
        // setTimeout(() => {
        //     setCountDown(countdown - 1);
        // },1000)
    },[])

    


    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}


export function PreviewAvatar(){

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        // Clean up
        return() => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} width="80%"/>
            )}
        </div>
    )
}

const lessons = [
    {
        id: 1,
        name: 'What is React? Why should you learn ReactJS'
    },
    {
        id: 2,
        name: "What is SPA/MPA?"
    },
    {
        id: 3,
        name: "Arrow Function"
    }
]

export function FakeChatApp() {
    const [lessonId, setLessonId] = useState(1)

    const handleComment = ({detail}) => {
        console.log(detail);
    }
    useEffect(() => {
        window.addEventListener(`lesson-${lessonId}`,handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style= {{
                            color: lessonId === lesson.id?
                                'red': 
                                '#333'
                            }}
                        onClick = {() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}