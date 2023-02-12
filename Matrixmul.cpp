<<<<<<< HEAD
#include <iostream>
using namespace std;
int main()
{
    int a[3][3],b[3][2],ab[3][2],i,j,k;
    int sum=0;
    cout<<endl<<"Enter elements of 1st matrix:"<<endl;
    for(int i=0;i<3;i++){
    for(int j=0;j<3;j++)
    {
        cin>>a[i][j];
    }
}
cout<<endl<<"Enter elements of 2nd matrix:"<<endl;
    for(int i=0;i<3;i++){
    for(int j=0;j<2;j++)
    {
        cin>>b[i][j];
    }
}
//Multiplication
for(int i=0;i<3;i++){
    for(int j=0;j<2;j++)
    {
        sum=0;
        for(int k=0;k<3;k++){
            sum=sum+a[i][k]*b[k][j];
        }
        ab[i][j]=sum;
    }
}
//Display 1st matrix
cout<<endl<<"1st matrix is:"<<endl;
for(int i=0;i<3;i++){
    for(int j=0;j<3;j++)
    {
        cout<<a[i] [j]<< " ";
    }
    cout<<endl;
    }
    //Display 2nd matrix
cout<<endl<<"2nd matrix is:"<<endl;
for(int i=0;i<3;i++){
    for(int j=0;j<2;j++)
    {
        cout<<b[i] [j]<<" ";
    }
    cout<<endl;
    }
    cout<<endl<<"Matrix Multiplication is:"<<endl;
    for(int i=0;i<3;i++)
    {
         for(int j=0;j<2;j++)
         {
             cout<<ab[i][j]<<" ";
         }
             cout<<endl;
         }}
=======
#include <iostream>
using namespace std;
int main()
{
    int a[3][3],b[3][2],ab[3][2],i,j,k;
    int sum=0;
    cout<<endl<<"Enter elements of 1st matrix:"<<endl;
    for(int i=0;i<3;i++){
    for(int j=0;j<3;j++)
    {
        cin>>a[i][j];
    }
}
cout<<endl<<"Enter elements of 2nd matrix:"<<endl;
    for(int i=0;i<3;i++){
    for(int j=0;j<2;j++)
    {
        cin>>b[i][j];
    }
}
//Multiplication
for(int i=0;i<3;i++){
    for(int j=0;j<2;j++)
    {
        sum=0;
        for(int k=0;k<3;k++){
            sum=sum+a[i][k]*b[k][j];
        }
        ab[i][j]=sum;
    }
}
//Display 1st matrix
cout<<endl<<"1st matrix is:"<<endl;
for(int i=0;i<3;i++){
    for(int j=0;j<3;j++)
    {
        cout<<a[i] [j]<< " ";
    }
    cout<<endl;
    }
    //Display 2nd matrix
cout<<endl<<"2nd matrix is:"<<endl;
for(int i=0;i<3;i++){
    for(int j=0;j<2;j++)
    {
        cout<<b[i] [j]<<" ";
    }
    cout<<endl;
    }
    cout<<endl<<"Matrix Multiplication is:"<<endl;
    for(int i=0;i<3;i++)
    {
         for(int j=0;j<2;j++)
         {
             cout<<ab[i][j]<<" ";
         }
             cout<<endl;
         }}
>>>>>>> e8d2cedc83b37c3f6605eecbd3d255db2672d8b4
