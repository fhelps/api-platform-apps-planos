async function getData(){
    try {
        let res =  await fetch('/app')
        return res.json()
    } catch (error) {
        console.log(error)        
    }
}

async function getPlans(){
    try {

        let res =  await fetch('/plan')
        return res.json()

    } catch (error) {
        console.log(error)        
    }

}

async function getApis(){
    try {

        let res =  await fetch('/api')
        return res.json()

    } catch (error) {
        console.log(error)        
    }

}

async function fillApis(){
    var apis = await getApis()

    for(api of apis){
    
        var option =`<option value="${api.id}">${api.name} </option>`

        $("#select_api").append(option);
    }

    $('select').formSelect();

    

    // fire custom event anytime you've updated select
    // $("#select_api").trigger('contentChanged');
    
}

async function fillPlans(plans){
    
    if(!plans)
        plans = await getPlans()

    for(plan of plans){
    
        var option =`<option value="${plan.id}">${plan.name} </option>`

        $("#select_plan").append(option);
    }

    $('select').formSelect();
}

$( "#select_api").change(async function() {
    console.log("apis filtradas- " + $("#select_api").val());

    await filter_plans()

    filterData()
});

$( "#select_plan").change(function() {
    console.log("planos filtrados- " + $("#select_plan").val() );
    filterData()
});

async function filterData(){
    var data = await getData()

    var plans_filter = $("#select_plan").val()
    var apis_filter = $("#select_api").val()

	var new_data = []
	
	if(apis_filter.length == 0 && plans_filter.length == 0 )

	if(apis_filter.length > 0 && plans_filter.length > 0 )

	if(apis_filter.length == 0 && plans_filter.length > 0 )

	if(apis_filter.length > 0 && plans_filter.length == 0 )

    for(app of data ){
        if(app.apis.length > 0){

            //filtro da api
            let filter_api = app.apis.filter(api => apis_filter.some(filter_api_id =>  filter_api_id == api.id))

            // //filtro do plano
			// let filter_plan = []

			// if(app.apis.length > 0)
			// 	for(api of app.apis){
			// 		for(plan of api.plans){
			// 			//console.log(plan)
			// 			if(plans_filter.some(filter_plan_id => filter_plan_id == plan.id ))
			// 				filter_plan.push(plan)
			// 		} 
			// 	}

            // // console.log(filter_api)
            // // console.log(filter_plan)


            // if(apis_filter > 0 && plans_filter > 0)
            //     if(filter_api.length > 0 && filter_plan.length > 0  )
            //         new_data.push(app)
                    
            // if(apis_filter > 0 || plans_filter > 0)
            //     if(filter_api.length > 0 || filter_plan.length > 0  )

            new_data.push(app)
            
        }
    }

    console.log(new_data)

    // if(!new_data.length == 0)
        $table.bootstrapTable("load", new_data)
    // else    
    //     $table.bootstrapTable("load", data)

}

async function filter_plans(){

    $("#select_plan").html(`<option value="" disabled selected>Selecione um Plano</option>`)
    // $('select').formSelect();

    let filter_apis = $("#select_api").val()
    let new_plans = []
    let plans = await getPlans()

    for(filter_api_id of filter_apis){
        new_plans.push(...plans.filter(plan => filter_api_id == plan.api.id))
    }

    if(!new_plans.length == 0)
        await fillPlans(new_plans)
    else
        await fillPlans(plans)

    // for(plan of new_plans){
    //     var option =`<option value="${plan.id}">${plan.name} </option>`

    //     $("#select_plan").append(option);
    // }


}

async function table() {
				
    var data = await getData()


    $table.bootstrapTable({data: data})

}

