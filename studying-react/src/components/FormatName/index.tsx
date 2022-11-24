import Element from './Element';

function FormatName() {
    const user = [
        {
            firstName: 'Janaína',
            lastName: 'Scher de Oliveira',
            yearOfBirth: '1986',
            currentYear: '2022'
        },
    ];

    return (
        <div>
            {user.map((item, index) => (
                <Element
                    key={index}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    yearOfBirth={item.yearOfBirth}
                    currentYear={item.currentYear}
                />
            ))}
        </div>
    );
}

export default FormatName;
