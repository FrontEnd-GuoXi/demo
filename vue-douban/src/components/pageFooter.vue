<template>
        <footer class="footer">
                <a href="#">
                    <div class="footer-container">
                        <img src="../assets/doubanicon.png" class="footer-icon">
                        <div class="footer-text">
                        <strong>豆瓣</strong>
                        <div>我们的精神部落</div>
                        </div>
                    </div>
                </a>
            </footer>
</template>

<script type="text/javascript">
	export default{
		
	}
</script>

<style type="text/css">
.footer{
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0.4rem 0;
	align-items: center;
}
.footer-container{
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.footer-icon{
	width: 1rem;
	height: 1rem;
}
.footer-text{
	padding-left: 0.2rem;
	height: 1rem;
}
.footer-text > strong{
	font-size: 18px;
	font-weight: 600;
	color: black;
}
.footer-text > div{
    font-weight:600;
    color: black;
}
</style>