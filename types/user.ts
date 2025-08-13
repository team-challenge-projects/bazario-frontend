export interface IUser {
  email: 'string';
  phoneNumber: 'string';
  cityCoordinate?: 'string';
  parameters?: [
    {
      restrictionPattern?: 'string';
      descriptionPattern?: 'string';
      id?: 0;
      typeName?: 'string';
      typeId?: 0;
      parameterValue?: 'string';
    },
  ];
  id: 0;
  firstName?: 'string';
  lastName?: 'string';
  avatar?: 'string';
  cityName?: 'string';
}
