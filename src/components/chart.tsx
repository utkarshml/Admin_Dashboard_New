import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
    PointElement,
    LineElement,
    RadialLinearScale,
  } from 'chart.js';
  import { Bar, Doughnut, Line, Pie, PolarArea } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    BarElement,
    PointElement,LineElement,
    Title,
    Tooltip,
    Legend
  );
  ChartJS.register(ArcElement, Tooltip, Legend);
  interface BarProp {
    horizontal?:boolean,
    labels?: string[],
    dataset_1 : number[],
    dataset_2 : number[], 
    lable_1 : string,
    apr?: boolean,
    lable_2 : string,
    bgColor_1 : string,
    bgColor_2 : string,
  }
  export function BarChart({ apr, horizontal ,  dataset_1 , dataset_2 , lable_1 , lable_2 , bgColor_1 , bgColor_2  ,labels}: BarProp) {
    const options : ChartOptions<"bar"> = {
       responsive: true,
      maintainAspectRatio : apr,
       indexAxis : horizontal ? "y" : "x",
       plugins: {
         legend: {
           position: 'bottom' as const,
         },
        
       },
       
       scales : {
          y : {
           beginAtZero : true,
           grid : {
            display : true
           }
          }, 
          x : {
            grid : {
              display : true
            }
          }
       }
     };
      const data : ChartData<"bar" , number[], string> = {
       labels,
       datasets: [
         {
           label: lable_1,
           data: dataset_1,
           backgroundColor:bgColor_1,
           
           barPercentage: 0.6, // Adjust this value to decrease the gap between bars
           borderRadius   : 5
         },
         {
           label:  lable_2,
           data: dataset_2,
           backgroundColor: bgColor_2,
           barPercentage: 0.6, // Adjust this value to decrease the gap between bars
           borderRadius : 5
         },
       ],
     };
     
     
     return (
           <Bar options={options} data={data} />
     )
   }
   
  interface DoughnutGraphProp {
    labels : string[],
    doughnutData: number[] ,
    color : string[],
    legends : boolean,
    cutout ? : number | string,
    offset : number[],
    style ?: {}

  }
 export const DoughnutGraph = ({labels, doughnutData, offset, legends = true, cutout  , color ,style } : DoughnutGraphProp) =>{
    
    const data : ChartData<"doughnut", number[] , string>  = {
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data: doughnutData,
            backgroundColor: color,
            borderColor:color,
            borderWidth: 0.4,

          },
        ],
      };
    
       const option : ChartOptions<"doughnut"> ={
        responsive : true,
        plugins : {
            legend : {
                display : legends,
                position : "bottom",         
                labels : {
                    padding : 30
                }
            }
        },
        cutout,
        offset
      }
    
    return ( <Doughnut style={style} options={option} data={data}/>)
}

export function LineChart({  dataset_1 , dataset_2 , lable_1 , lable_2 , bgColor_1 , bgColor_2  ,labels}: BarProp) {
  const options : ChartOptions<"line"> = {
     responsive: true,
     maintainAspectRatio : false ,
     elements : {
      line : {
        tension : 0.5,
        borderCapStyle : "round"
      
      }
     },
     plugins: {
       legend: {
         position: 'top' as const,
        
       },
      
     },
     
   };
    const data : ChartData<"line" , number[], string> = {
     labels,
     datasets: [
       {
         label: lable_1,
         data: dataset_1,
         backgroundColor:bgColor_1,
       },
       {
         label:  lable_2,
         data: dataset_2,
         backgroundColor: bgColor_2,
       },
     ],
   };
   
   
   return (
   <Line options={options} data={data} />
   )
 }

 type datasetPropsForPi = {
  label : string , data : number[] , backgroundColor : string[] , borderColor?: string[], 
    borderWidth : number
  
 }

export type piProp =  {
  labels : string[],
  datasets : datasetPropsForPi[],
}

 export function PiChart({labels, datasets }: piProp) {

    const data : ChartData<"pie", number[], string> = {
     labels,
  
     datasets,
     

   };
   
   
   return (
     <Pie options={{maintainAspectRatio : true , responsive : true , plugins : { legend : {position : 'bottom' as const }}}} data={data} />
   )
 }
 type dataset = {
  label : string,
  data : number[],
  backgroundColor : string[],
  borderWidth : number
 }
 interface PolarProp {
  labels : string[],
  datasets : dataset[]
 }

 export function PolerChart({ labels , datasets} : PolarProp) {

const data : ChartData<"polarArea" , number[] , string> = {
    labels,
    datasets
  
  }
 return (
    <PolarArea options={{plugins : {legend : {position : 'bottom' as const}}}} data={data} />
 )
}