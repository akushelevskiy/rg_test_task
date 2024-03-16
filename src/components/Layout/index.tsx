import s from './layout.module.css'


export function Layout (props:{children:JSX.Element}) {
    return (
        <div className={s.container}>
            <h1>Тестовое задание для Российской газеты</h1>
            <div>{props.children}</div>
        </div>
    );
}
