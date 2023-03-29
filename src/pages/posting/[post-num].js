export default function ReadPage(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div>{props.content}</div>
            <div>{props.date}</div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    console.log(params);
    console.log(context)
    // const data = params.getData();

    return {
        props: {
            text: 'sibal'
        }
    }

}