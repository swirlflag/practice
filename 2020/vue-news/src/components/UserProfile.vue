<template>
    <div class="page--item">
        <section>
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <slot name="username"></slot>
                    <div class="time_ago">
                        <slot name="time_ago"></slot>
                        <slot name="karma"></slot>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props : {
        info : Object,
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time_ago {
    font-size: 0.7rem;
}
</style>