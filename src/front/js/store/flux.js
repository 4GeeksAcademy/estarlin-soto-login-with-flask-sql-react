const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			loginData: {
				email: "",
				password: ""
			},
			privateData: "",
			loginRes : [],
			newUserRes : ''
		


		},
		actions: {
			getToken: async () => {
				try {
					const store = getStore()
					await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(store.loginData)
					})
						.then((res) => res.json())
						.then((json) => {
							if (json.access_token) {
								localStorage.setItem("access_token", json.access_token)
								let res = json.status
								
								store.loginRes.push(res)
								store.loginRes.push(true)
								 setStore({res: store.loginRes})
								 
							}
							
						})

				} catch (error) {
					console.log("getToken function error==", error)
				}

			},
			createNewUser: async (newUser) => {
				try {
					const store = getStore()
					await fetch(process.env.BACKEND_URL + "/api/singup", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						
						body: JSON.stringify(newUser)
					})
						.then((res) => res.json())
						.then((json) => console.log(json))
						setStore({store : store.newUserRes = 'success'})
						
					

				} catch (error) {
					console.log("getToken function error==", error)
				}

			},
			setEmail: (email) => {
				const store = getStore()
				store.loginData.email = email
				setStore({ email: store.loginData.email })
				console.log(store.loginData)
			},
			setPassword: (password) => {
				const store = getStore()
				store.loginData.password = password
				setStore({ password: store.loginData.password })
				console.log(store.loginData)
			},

			privateViewRequest: async () => {
				if (localStorage.access_token) {
					const store = getStore()
					await fetch(process.env.BACKEND_URL + "/api/private", {

						headers: {
							Authorization: `Bearer ${localStorage.access_token}`
						}
					})
						.then((res) => {
							if (res.status == 200) {
								return res.json()
							} else {
								throw Error(res.statusText)
							}
						})
						.then((json) => store.privateData = json.msg)
						setStore({ store: store.privateData })
						setStore({store: store.loginRes = [true]})

				}

			}

		}
	};
};

export default getState;
