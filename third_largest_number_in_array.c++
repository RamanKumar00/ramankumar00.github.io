#include<iostream>
using namespace std;
int main()
{
    int arr[5]={1,2,3,4,5};
    int firstmax=arr[0];
    int secondmax=arr[0];
    int thirdmax=arr[0];

    for(int i=1;i<5;i++)
    {
        if(arr[i]>firstmax)
        {
            firstmax=arr[i];
        }
    }
     for(int i=1;i<5;i++)
    {
        if(arr[i]<firstmax && arr[i]>thirdmax)
        {
            secondmax=arr[i];
        }
    }
      for(int i=1;i<5;i++)
    {
        if(arr[i]<secondmax && arr[i]>thirdmax)
        {
            thirdmax=arr[i];
             
        }
    }
  
    cout<<thirdmax;
    return 0;




}