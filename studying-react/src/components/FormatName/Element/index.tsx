function Element(props: {
    firstName: string;
    lastName: string;
    yearOfBirth: any;
    currentYear: any;
}) {

    const { firstName, lastName, yearOfBirth, currentYear } = props;

    const fullName = `${firstName} ${lastName}`;
    const result = currentYear - yearOfBirth;

    return (
        <h1>
            Olá, meu nome é {fullName}, tenho {result} anos e este é meu primeiro contato
            com JSX.
        </h1>
    );
}

export default Element;
